import { createServerFn } from "@tanstack/react-start";
import { getRequestHeaders } from "@tanstack/react-start/server";
import { prisma } from "#/db";
import { auth } from "@/lib/auth";
import { z } from "zod";
import { enqueuePteroDeployment } from "../deploy/queue";
const createOrderSchema = z.object({
    cartId: z.string().optional(),
});
const getOrderSchema = z.object({
    orderId: z.string(),
});
const updateOrderStatusSchema = z.object({
    orderId: z.string(),
    status: z.enum(['PENDING', 'PAYMENT_FAILED', 'PAID', 'PROCESSING', 'DELIVERED', 'CANCELLED', 'REFUNDED']),
});
const cancelOrderSchema = z.object({
    orderId: z.string(),
});
const wrapSuccess = (message, data) => ({ success: true, message, data });
const wrapError = (message) => ({ success: false, message });
function calculateExpiryDate(billingPeriod) {
    const now = new Date();
    switch (billingPeriod) {
        case 'HOURLY':
            return new Date(now.getTime() + 60 * 60 * 1000);
        case 'DAILY':
            return new Date(now.getTime() + 24 * 60 * 60 * 1000);
        case 'MONTHLY':
            return new Date(now.setMonth(now.getMonth() + 1));
        case 'QUARTERLY':
            return new Date(now.setMonth(now.getMonth() + 3));
        case 'SEMIANNUALLY':
            return new Date(now.setMonth(now.getMonth() + 6));
        case 'YEARLY':
            return new Date(now.setFullYear(now.getFullYear() + 1));
        default:
            return new Date(now.setMonth(now.getMonth() + 1));
    }
}
export const createOrder = createServerFn({ method: "POST" })
    .inputValidator((data) => createOrderSchema.parse(data))
    .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        return wrapError("Unauthorized");
    const cart = await prisma.cart.findFirst({
        where: {
            userId: session.user.id,
            id: data.cartId,
        },
        include: { items: { include: { product: true } } },
    });
    if (!cart || cart.items.length === 0) {
        return wrapError("Cart is empty.");
    }
    const coupon = cart.couponCode
        ? await prisma.coupon.findUnique({ where: { code: cart.couponCode } })
        : null;
    const validCoupon = coupon &&
        coupon.active &&
        (!coupon.expiresAt || coupon.expiresAt > new Date());
    const subtotalAmount = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const discountAmount = validCoupon
        ? coupon.type === 'PERCENT'
            ? Math.floor((subtotalAmount * coupon.amount) / 100)
            : coupon.amount
        : 0;
    const totalAmount = Math.max(subtotalAmount - discountAmount, 0);
    const order = await prisma.order.create({
        data: {
            userId: session.user.id,
            status: 'PENDING',
            subtotalAmount,
            discountAmount,
            totalAmount,
            couponCode: validCoupon ? cart.couponCode : undefined,
            items: {
                create: cart.items.map((item) => ({
                    productId: item.productId,
                    productName: item.product.planName,
                    quantity: item.quantity,
                    billingPeriod: item.billingPeriod,
                    unitPrice: item.product.price,
                    totalPrice: item.product.price * item.quantity,
                    specsSnapshot: item.product.specs ?? {},
                    expiresAt: calculateExpiryDate(item.billingPeriod),
                })),
            },
        },
        include: { items: { include: { product: true } } },
    });
    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
    return wrapSuccess('Order created successfully.', order);
});
export const getOrders = createServerFn({ method: "GET" }).handler(async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        throw new Error("Unauthorized");
    return prisma.order.findMany({
        where: { userId: session.user.id },
        include: { items: { include: { product: true } } },
        orderBy: { createdAt: "desc" },
    });
});
export const getOrder = createServerFn({ method: "GET" })
    .inputValidator((data) => getOrderSchema.parse(data))
    .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        throw new Error("Unauthorized");
    const order = await prisma.order.findFirst({
        where: { id: data.orderId, userId: session.user.id },
        include: {
            items: { include: { product: true } },
            user: { select: { id: true, name: true, email: true } }
        },
    });
    if (!order)
        throw new Error("Order not found");
    return order;
});
export const updateOrderStatus = createServerFn({ method: "POST" })
    .inputValidator((data) => updateOrderStatusSchema.parse(data))
    .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        return wrapError("Unauthorized");
    const order = await prisma.order.findFirst({
        where: { id: data.orderId, userId: session.user.id },
        include: { items: { include: { product: true } } },
    });
    if (!order)
        return wrapError("Order not found.");
    const updatedOrder = await prisma.order.update({
        where: { id: data.orderId },
        data: { status: data.status },
    });
    if (data.status === 'PAID') {
        const pteroItems = order.items.filter((item) => item.product.deployMode === 'PTERODACTYL');
        const customItems = order.items.filter((item) => item.product.deployMode === 'CUSTOM');
        // Handle CUSTOM items — create a pending server record for manual delivery
        await Promise.all(customItems.map(async (item) => {
            const existingServer = await prisma.server.findUnique({
                where: { orderItemId: item.id },
            });
            if (existingServer)
                return;
            await prisma.server.create({
                data: {
                    orderItemId: item.id,
                    userId: session.user.id,
                    name: `${item.productName}-${item.id.slice(0, 8)}`,
                    type: item.product.category,
                    status: 'PENDING_MANUAL',
                    expiresAt: item.expiresAt,
                },
            });
        }));
        // Handle PTERODACTYL items
        await Promise.all(pteroItems.map(async (item) => {
            const existingServer = await prisma.server.findUnique({
                where: { orderItemId: item.id },
            });
            if (existingServer)
                return;
            const name = `${item.productName}-${item.id.slice(0, 8)}`;
            const productSpecs = item.product.specs ?? {};
            const userConfig = (item.configuration ?? {});
            // Resolve egg/nest/envVars from ConfigurationValue metadata
            let resolvedEgg = Number(productSpecs.egg ?? process.env.PTERO_DEFAULT_EGG ?? 1);
            let resolvedNest = Number(productSpecs.nest ?? process.env.PTERO_DEFAULT_NEST ?? 1);
            let extraEnv = {};
            // Find any config value that has egg/nest in its metadata
            const configValueIds = Object.values(userConfig).filter(Boolean);
            if (configValueIds.length > 0) {
                const configValues = await prisma.configurationValue.findMany({
                    where: { value: { in: configValueIds } },
                });
                for (const cv of configValues) {
                    const meta = cv.metadata;
                    if (!meta)
                        continue;
                    if (meta.eggId)
                        resolvedEgg = Number(meta.eggId);
                    if (meta.nestId)
                        resolvedNest = Number(meta.nestId);
                    if (meta.envVars && typeof meta.envVars === 'object') {
                        extraEnv = { ...extraEnv, ...meta.envVars };
                    }
                }
            }
            const server = await prisma.server.create({
                data: {
                    orderItemId: item.id,
                    userId: session.user.id,
                    name,
                    type: item.product.category,
                    status: 'PROCESSING',
                    expiresAt: item.expiresAt,
                    resources: {
                        cpu: Number(productSpecs.cpu ?? 0),
                        memory: Number(productSpecs.memory ?? 0),
                        swap: Number(productSpecs.swap ?? 0),
                        disk: Number(productSpecs.disk ?? 0),
                        database: Number(productSpecs.database ?? 0),
                        allocation: Number(productSpecs.allocation ?? 1),
                        backups: Number(productSpecs.backups ?? 0),
                    },
                },
            });
            await enqueuePteroDeployment({
                orderId: order.id,
                orderItemId: item.id,
                serverId: server.id,
                name,
                user: Number(process.env.PTERO_DEFAULT_USER_ID ?? 1),
                nest: resolvedNest,
                egg: resolvedEgg,
                extraEnv,
                specs: {
                    cpu: Number(productSpecs.cpu ?? 0),
                    memory: Number(productSpecs.memory ?? 0),
                    swap: Number(productSpecs.swap ?? 0),
                    disk: Number(productSpecs.disk ?? 0),
                    database: Number(productSpecs.database ?? 0),
                    allocation: Number(productSpecs.allocation ?? 1),
                    backups: Number(productSpecs.backups ?? 0),
                },
                type: item.product.category,
            });
        }));
    }
    return wrapSuccess('Order status updated successfully.', updatedOrder);
});
const checkoutSchema = z.object({
    productId: z.string(),
    quantity: z.number().int().positive().default(1),
    billingPeriod: z.enum(['MONTHLY', 'QUARTERLY', 'YEARLY']).default('MONTHLY'),
    configuration: z.record(z.string()).optional(),
    billingName: z.string().min(1),
    billingEmail: z.string().email(),
    billingPhone: z.string().optional(),
});
export const checkoutProduct = createServerFn({ method: "POST" })
    .inputValidator((data) => checkoutSchema.parse(data))
    .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        return wrapError("Unauthorized");
    const product = await prisma.product.findUnique({ where: { id: data.productId } });
    if (!product)
        return wrapError("Product not found");
    const unitPrice = product.price;
    const totalAmount = unitPrice * data.quantity;
    const order = await prisma.order.create({
        data: {
            userId: session.user.id,
            status: 'PENDING',
            subtotalAmount: totalAmount,
            discountAmount: 0,
            totalAmount,
            items: {
                create: {
                    productId: product.id,
                    productName: product.planName,
                    quantity: data.quantity,
                    billingPeriod: data.billingPeriod,
                    unitPrice,
                    totalPrice: totalAmount,
                    specsSnapshot: product.specs ?? {},
                    configuration: data.configuration ?? undefined,
                    expiresAt: calculateExpiryDate(data.billingPeriod),
                },
            },
        },
        include: { items: true, user: true },
    });
    // Create Razorpay order
    let razorpayOrderId = null;
    try {
        const { default: Razorpay } = await import('razorpay');
        const rzp = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });
        const rzpOrder = await rzp.orders.create({
            amount: totalAmount * 100,
            currency: 'INR',
            receipt: `ord_${order.id.slice(0, 32)}`,
            notes: {
                orderId: order.id,
                userId: session.user.id,
                customerEmail: data.billingEmail,
            },
        });
        razorpayOrderId = rzpOrder.id;
        await prisma.order.update({
            where: { id: order.id },
            data: {
                deliveryData: {
                    razorpayOrderId: rzpOrder.id,
                    razorpayAmount: rzpOrder.amount,
                    billingName: data.billingName,
                    billingEmail: data.billingEmail,
                    billingPhone: data.billingPhone ?? null,
                },
            },
        });
    }
    catch (e) {
        // Razorpay failed — still return the orderId so admin can manually generate link
        console.error('Razorpay order creation failed:', e);
    }
    return wrapSuccess('Order created', {
        orderId: order.id,
        razorpayOrderId,
        totalAmount,
        productName: product.planName,
        billingName: data.billingName,
        billingEmail: data.billingEmail,
    });
});
export const cancelOrder = createServerFn({ method: "POST" })
    .inputValidator((data) => cancelOrderSchema.parse(data))
    .handler(async ({ data }) => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        return wrapError("Unauthorized");
    const order = await prisma.order.findFirst({
        where: { id: data.orderId, userId: session.user.id },
    });
    if (!order)
        return wrapError("Order not found.");
    const cancelled = await prisma.order.update({
        where: { id: data.orderId },
        data: { status: 'CANCELLED' },
    });
    return wrapSuccess('Order cancelled successfully.', cancelled);
});
//# sourceMappingURL=order.api.js.map