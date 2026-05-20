import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    clientId: z.string(),
    name: z.string(),
    email: z.string(),
    emailVerified: z.boolean(),
    image: z.string().optional().nullable(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    sessions: z.array(z.any()),
    accounts: z.array(z.any()),
    role: z.string().optional().nullable(),
    banned: z.boolean().optional().nullable(),
    banReason: z.string().optional().nullable(),
    banExpires: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime").optional().nullable(),
    username: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    servers: z.array(z.any()),
    cart: z.any().optional().nullable(),
    orders: z.array(z.any()),
    displayUsername: z.string().optional().nullable()
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
