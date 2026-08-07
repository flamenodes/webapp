import * as z from 'zod';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    sessions: z.array(z.any()),
    accounts: z.array(z.any()),
    role: z.string().nullable(),
    banned: z.boolean().nullable(),
    banReason: z.string().nullable(),
    banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    username: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    pteroUserId: z.number().int().nullable(),
    billingAddress: z.any().nullable(),
    servers: z.array(z.any()),
    cart: z.any().nullable(),
    orders: z.array(z.any()),
    displayUsername: z.string().nullable(),
    tickets: z.array(z.any()),
    assignedTickets: z.array(z.any()),
    ticketMessages: z.array(z.any()),
    notifications: z.array(z.any())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
