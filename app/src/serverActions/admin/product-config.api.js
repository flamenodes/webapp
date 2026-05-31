import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { prisma } from '#/db';
import { auth } from '@/lib/auth';
import { z } from 'zod';
const wrapSuccess = (message, data) => ({ success: true, message, data });
const wrapError = (message) => ({ success: false, message });
async function requireAdmin() {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        throw new Error('Unauthorized');
    const role = session.user.role?.toLowerCase();
    if (role !== 'admin' && role !== 'owner')
        throw new Error('Forbidden');
    return session.user;
}
const configOptionSchema = z.object({
    id: z.string(),
    label: z.string(),
    value: z.string(),
    description: z.string().optional(),
});
const pteroSpecsSchema = z.object({
    nest: z.number().optional(),
    egg: z.number().optional(),
    cpu: z.number().optional(),
    memory: z.number().optional(),
    swap: z.number().optional(),
    disk: z.number().optional(),
    database: z.number().optional(),
    allocation: z.number().optional(),
    backups: z.number().optional(),
});
const updateProductConfigSchema = z.object({
    productId: z.string(),
    config: z.object({
        options: z.array(configOptionSchema),
        ptero: pteroSpecsSchema.optional(),
    }),
});
export const getProducts = createServerFn({ method: 'GET' }).handler(async () => {
    await requireAdmin();
    const products = await prisma.product.findMany({
        orderBy: [{ category: 'asc' }, { sortOrder: 'asc' }],
    });
    return wrapSuccess('Products fetched successfully', products);
});
export const updateProductConfig = createServerFn({ method: 'POST' })
    .inputValidator((data) => updateProductConfigSchema.parse(data))
    .handler(async ({ data }) => {
    await requireAdmin();
    const product = await prisma.product.findUnique({
        where: { id: data.productId },
    });
    if (!product) {
        return wrapError('Product not found');
    }
    // Update the product's specs field with the configuration
    const updatedProduct = await prisma.product.update({
        where: { id: data.productId },
        data: {
            specs: data.config,
        },
    });
    return wrapSuccess('Product configuration updated successfully', updatedProduct);
});
export const getProductConfig = createServerFn({ method: 'GET' })
    .inputValidator((data) => z.object({ productId: z.string() }).parse(data))
    .handler(async ({ data }) => {
    const product = await prisma.product.findUnique({
        where: { id: data.productId },
        select: { id: true, planName: true, category: true, specs: true },
    });
    if (!product) {
        return wrapError('Product not found');
    }
    return wrapSuccess('Product configuration fetched successfully', product);
});
//# sourceMappingURL=product-config.api.js.map