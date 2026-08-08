import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional().nullable(),
    banReason: z.string().optional().nullable(),
    banned: z.boolean().optional().nullable(),
    displayUsername: z.string().optional().nullable(),
    firstname: z.string(),
    lastname: z.string(),
    role: z.string().optional().nullable(),
    username: z.string(),
    clientId: z.string(),
    pteroUserId: z.number().int().optional().nullable(),
    cart: z.any().optional().nullable(),
    notifications: z.array(z.any()),
    orders: z.array(z.any()),
    servers: z.array(z.any()),
    assignedTickets: z.array(z.any()),
    tickets: z.array(z.any()),
    ticketMessages: z.array(z.any()),
    accounts: z.array(z.any()),
    billingAddress: z.any().optional().nullable(),
    sessions: z.array(z.any())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
