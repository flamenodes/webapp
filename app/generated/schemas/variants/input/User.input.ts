import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    role: z.string().optional().nullable(),
    banned: z.boolean().optional().nullable(),
    banReason: z.string().optional().nullable(),
    banExpires: z.coerce.date().optional().nullable(),
    username: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    pteroUserId: z.number().int().optional().nullable(),
    address: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    zip: z.string().optional().nullable(),
    country: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    servers: z.array(z.unknown()),
    cart: z.unknown().optional().nullable(),
    orders: z.array(z.unknown()),
    displayUsername: z.string().optional().nullable(),
    tickets: z.array(z.unknown()),
    assignedTickets: z.array(z.unknown()),
    ticketMessages: z.array(z.unknown()),
    notifications: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
