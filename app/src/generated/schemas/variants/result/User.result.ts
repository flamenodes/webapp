import * as z from 'zod';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").nullable(),
    banReason: z.string().nullable(),
    banned: z.boolean().nullable(),
    displayUsername: z.string().nullable(),
    firstname: z.string(),
    lastname: z.string(),
    role: z.string().nullable(),
    username: z.string(),
    clientId: z.string(),
    pteroUserId: z.number().int().nullable(),
    cart: z.any().nullable(),
    notifications: z.array(z.any()),
    orders: z.array(z.any()),
    servers: z.array(z.any()),
    assignedTickets: z.array(z.any()),
    tickets: z.array(z.any()),
    ticketMessages: z.array(z.any()),
    accounts: z.array(z.any()),
    billingAddress: z.any().nullable(),
    sessions: z.array(z.any())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
