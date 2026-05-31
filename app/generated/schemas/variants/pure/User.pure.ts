import * as z from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    sessions: z.array(z.unknown()),
    accounts: z.array(z.unknown()),
    role: z.string().nullable(),
    banned: z.boolean().nullable(),
    banReason: z.string().nullable(),
    banExpires: z.date().nullable(),
    username: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    pteroUserId: z.number().int().nullable(),
    address: z.string().nullable(),
    city: z.string().nullable(),
    zip: z.string().nullable(),
    country: z.string().nullable(),
    servers: z.array(z.unknown()),
    cart: z.unknown().nullable(),
    orders: z.array(z.unknown()),
    displayUsername: z.string().nullable(),
    tickets: z.array(z.unknown()),
    assignedTickets: z.array(z.unknown()),
    ticketMessages: z.array(z.unknown()),
    notifications: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
