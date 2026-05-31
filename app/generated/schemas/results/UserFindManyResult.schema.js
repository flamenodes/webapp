import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
    data: z.array(z.object({
        id: z.string(),
        clientId: z.string(),
        name: z.string(),
        email: z.string(),
        emailVerified: z.boolean(),
        image: z.string().optional(),
        createdAt: z.date(),
        updatedAt: z.date(),
        sessions: z.array(z.unknown()),
        accounts: z.array(z.unknown()),
        role: z.string().optional(),
        banned: z.boolean().optional(),
        banReason: z.string().optional(),
        banExpires: z.date().optional(),
        username: z.string(),
        firstname: z.string(),
        lastname: z.string(),
        pteroUserId: z.number().int().optional(),
        address: z.string().optional(),
        city: z.string().optional(),
        zip: z.string().optional(),
        country: z.string().optional(),
        servers: z.array(z.unknown()),
        cart: z.unknown().optional(),
        orders: z.array(z.unknown()),
        displayUsername: z.string().optional(),
        tickets: z.array(z.unknown()),
        assignedTickets: z.array(z.unknown()),
        ticketMessages: z.array(z.unknown()),
        notifications: z.array(z.unknown())
    })),
    pagination: z.object({
        page: z.number().int().min(1),
        pageSize: z.number().int().min(1),
        total: z.number().int().min(0),
        totalPages: z.number().int().min(0),
        hasNext: z.boolean(),
        hasPrev: z.boolean()
    })
});
//# sourceMappingURL=UserFindManyResult.schema.js.map