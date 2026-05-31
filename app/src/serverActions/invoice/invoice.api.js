import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import easyinvoice from 'easyinvoice';
import { uploadInvoicePDF } from './upload-invoice';
import { getSession } from '@/handlers/auth.handler';
import { prisma } from '@/db';
import { hasPermissionFn } from '@/lib/has-permission';
const wrapSuccess = (message, data) => ({
    success: true,
    message,
    data,
});
const wrapError = (message) => ({ success: false, message });
const generateInvoiceSchema = z.object({
    orderId: z.string(),
    razorpayData: z.record(z.any()).optional(),
});
async function requireAdmin() {
    const session = await getSession();
    const permission = await hasPermissionFn({ data: { permissions: { products: ['read'] } } });
    if (!permission) {
        return "Permission denied";
    }
    return session?.user;
}
export const generateInvoice = createServerFn({ method: 'POST' })
    .inputValidator((data) => generateInvoiceSchema.parse(data))
    .handler(async ({ data }) => {
    const session = await getSession();
    if (!session?.user)
        return wrapError('Unauthorized');
    // Check if invoice already exists
    const existingInvoice = await prisma.invoice.findUnique({
        where: { orderId: data.orderId },
    });
    if (existingInvoice) {
        return wrapSuccess('Invoice already exists', existingInvoice);
    }
    // Get order details
    const order = await prisma.order.findFirst({
        where: {
            id: data.orderId,
            userId: session.user.id,
        },
        include: {
            items: {
                include: { product: true },
            },
            user: true,
        },
    });
    if (!order) {
        return wrapError('Order not found');
    }
    // Generate invoice number
    const invoiceCount = await prisma.invoice.count();
    const invoiceNumber = `INV-${new Date().getFullYear()}-${String(invoiceCount + 1).padStart(6, '0')}`;
    // Prepare invoice data
    const invoiceData = {
        sender: {
            company: 'Flame Nodes',
            address: 'Your Address',
            city: 'Your City',
            zip: 'Your ZIP',
            country: 'India',
            custom1: 'GSTIN: YOUR_GSTIN',
            custom2: 'PAN: YOUR_PAN',
        },
        client: {
            company: order.user.name || 'Customer',
            address: 'Customer Address',
            city: 'Customer City',
            zip: 'Customer ZIP',
            country: 'India',
            custom1: `Email: ${order.user.email}`,
            custom2: `Customer ID: ${order.user.id.slice(0, 8)}`,
        },
        information: {
            number: invoiceNumber,
            date: new Date(order.createdAt).toLocaleDateString('en-IN'),
            'due-date': new Date(order.createdAt).toLocaleDateString('en-IN'),
        },
        products: order.items.map((item) => ({
            quantity: item.quantity,
            description: `${item.productName} (${item.billingPeriod.toLowerCase()})`,
            'tax-rate': 18, // GST rate
            price: item.unitPrice,
        })),
        'bottom-notice': 'Thank you for your business. Please contact support@flamenodes.com for any queries.',
        settings: {
            currency: 'INR',
            'tax-notation': 'GST',
            'margin-top': 25,
            'margin-right': 25,
            'margin-left': 25,
            'margin-bottom': 25,
        },
    };
    try {
        // Generate PDF
        const result = await easyinvoice.createInvoice(invoiceData);
        const pdfBase64 = result.pdf;
        // Convert base64 to buffer
        const pdfBuffer = Buffer.from(pdfBase64, 'base64');
        // Upload to ImageKit
        const pdfUrl = await uploadInvoicePDF(pdfBuffer, `${invoiceNumber}.pdf`);
        // Save invoice to database
        const invoice = await prisma.invoice.create({
            data: {
                orderId: order.id,
                invoiceNumber,
                pdfUrl,
                razorpayData: data.razorpayData || null,
            },
        });
        return wrapSuccess('Invoice generated successfully', invoice);
    }
    catch (error) {
        console.error('Invoice generation error:', error);
        return wrapError('Failed to generate invoice');
    }
});
export const getInvoices = createServerFn({ method: 'GET' }).handler(async () => {
    const session = getSession();
    if (!session?.user)
        return wrapError('Unauthorized');
    const invoices = await prisma.invoice.findMany({
        where: {
            order: {
                userId: session.user.id,
            },
        },
        include: {
            order: {
                include: {
                    items: true,
                },
            },
        },
        orderBy: { createdAt: 'desc' },
    });
    return wrapSuccess('Invoices fetched successfully', invoices);
});
export const getInvoiceByOrderId = createServerFn({ method: 'GET' })
    .inputValidator((data) => z.object({ orderId: z.string() }).parse(data))
    .handler(async ({ data }) => {
    const session = await getSession();
    if (!session?.user)
        throw new Error('Unauthorized');
    const invoice = await prisma.invoice.findUnique({
        where: { orderId: data.orderId },
        include: {
            order: {
                include: {
                    items: true,
                    user: true,
                },
            },
        },
    });
    if (!invoice || invoice.order.userId !== session.user.id) {
        throw new Error('Invoice not found');
    }
    return invoice;
});
export const getAllInvoices = createServerFn({ method: 'GET' }).handler(async () => {
    await requireAdmin();
    const invoices = await prisma.invoice.findMany({
        include: {
            order: {
                include: {
                    items: true,
                    user: true,
                },
            },
        },
        orderBy: { createdAt: 'desc' },
    });
    return wrapSuccess('Invoices fetched successfully', invoices);
});
//# sourceMappingURL=invoice.api.js.map