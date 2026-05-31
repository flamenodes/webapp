import { prisma } from '#/db';
import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { getSession } from '#/handlers/auth.handler';
import { hasPermissionFn } from '#/lib/has-permission';
const BillingInfoSchema = z.object({
    firstname: z.string().min(1, 'First name is required'),
    lastname: z.string().min(1, 'Last name is required'),
    address: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
    country: z.string().optional(),
    phone: z.string().optional(),
});
const UpdateBillingSchema = z.object({
    userId: z.string().optional(),
    data: BillingInfoSchema,
});
const DeleteBillingSchema = z.object({
    userId: z.string(),
});
// Get current user's billing info
export const getMyBillingInfo = createServerFn({ method: 'POST' })
    .handler(async () => {
    const session = await getSession();
    if (!session?.user.id) {
        throw new Error('Unauthorized');
    }
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            address: true,
            city: true,
            zip: true,
            country: true,
            phone: true,
        },
    });
    if (!user) {
        throw new Error('User not found');
    }
    return { success: true, data: user };
});
// Update current user's billing info
export const updateMyBillingInfo = createServerFn({ method: 'POST' })
    .inputValidator(BillingInfoSchema)
    .handler(async ({ data }) => {
    const session = await getSession();
    if (!session?.user.id) {
        throw new Error('Unauthorized');
    }
    const hasPermission = await hasPermissionFn({
        data: { permissions: { billing: ['update'] } },
    });
    if (!hasPermission) {
        throw new Error('Insufficient permissions');
    }
    const user = await prisma.user.update({
        where: { id: session.user.id },
        data: {
            firstname: data.firstname,
            lastname: data.lastname,
            address: data.address,
            city: data.city,
            zip: data.zip,
            country: data.country,
            phone: data.phone,
        },
        select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            address: true,
            city: true,
            zip: true,
            country: true,
            phone: true,
        },
    });
    return { success: true, data: user, message: 'Billing information updated successfully' };
});
// Admin: Get all users' billing info
export const getAllBillingInfo = createServerFn({ method: 'POST' })
    .handler(async () => {
    const session = await getSession();
    if (!session?.user.id) {
        throw new Error('Unauthorized');
    }
    const hasPermission = await hasPermissionFn({
        data: { permissions: { billing: ['read-all'] } },
    });
    if (!hasPermission) {
        throw new Error('Insufficient permissions');
    }
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            firstname: true,
            lastname: true,
            address: true,
            city: true,
            zip: true,
            country: true,
            phone: true,
            createdAt: true,
            _count: {
                select: {
                    orders: true,
                },
            },
        },
        orderBy: {
            createdAt: 'desc',
        },
    });
    return { success: true, data: users };
});
// Admin: Get specific user's billing info
export const getUserBillingInfo = createServerFn({ method: 'POST' })
    .inputValidator(z.object({ userId: z.string() }))
    .handler(async ({ data }) => {
    const session = await getSession();
    if (!session?.user.id) {
        throw new Error('Unauthorized');
    }
    const hasPermission = await hasPermissionFn({
        data: { permissions: { billing: ['read-all'] } },
    });
    if (!hasPermission) {
        throw new Error('Insufficient permissions');
    }
    const user = await prisma.user.findUnique({
        where: { id: data.userId },
        select: {
            id: true,
            name: true,
            email: true,
            firstname: true,
            lastname: true,
            address: true,
            city: true,
            zip: true,
            country: true,
            phone: true,
            createdAt: true,
            orders: {
                select: {
                    id: true,
                    totalAmount: true,
                    status: true,
                    createdAt: true,
                },
                orderBy: {
                    createdAt: 'desc',
                },
                take: 10,
            },
        },
    });
    if (!user) {
        throw new Error('User not found');
    }
    return { success: true, data: user };
});
// Admin: Update user's billing info
export const updateUserBillingInfo = createServerFn({ method: 'POST' })
    .inputValidator(UpdateBillingSchema)
    .handler(async ({ data }) => {
    const session = await getSession();
    if (!session?.user.id) {
        throw new Error('Unauthorized');
    }
    const hasPermission = await hasPermissionFn({
        data: { permissions: { billing: ['update-all'] } },
    });
    if (!hasPermission) {
        throw new Error('Insufficient permissions');
    }
    if (!data.userId) {
        throw new Error('User ID is required');
    }
    const user = await prisma.user.update({
        where: { id: data.userId },
        data: {
            firstname: data.data.firstname,
            lastname: data.data.lastname,
            address: data.data.address,
            city: data.data.city,
            zip: data.data.zip,
            country: data.data.country,
            phone: data.data.phone,
        },
        select: {
            id: true,
            name: true,
            email: true,
            firstname: true,
            lastname: true,
            address: true,
            city: true,
            zip: true,
            country: true,
            phone: true,
        },
    });
    return { success: true, data: user, message: 'User billing information updated successfully' };
});
// Admin: Delete user's billing info (clear fields)
export const deleteUserBillingInfo = createServerFn({ method: 'POST' })
    .inputValidator(DeleteBillingSchema)
    .handler(async ({ data }) => {
    const session = await getSession();
    if (!session?.user.id) {
        throw new Error('Unauthorized');
    }
    const hasPermission = await hasPermissionFn({
        data: { permissions: { billing: ['delete'] } },
    });
    if (!hasPermission) {
        throw new Error('Insufficient permissions');
    }
    const user = await prisma.user.update({
        where: { id: data.userId },
        data: {
            address: null,
            city: null,
            zip: null,
            country: 'India',
            phone: null,
        },
    });
    return { success: true, message: 'Billing information cleared successfully' };
});
//# sourceMappingURL=billing.api.js.map