import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    clientId: z.literal(true).optional(),
    name: z.literal(true).optional(),
    email: z.literal(true).optional(),
    emailVerified: z.literal(true).optional(),
    image: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    role: z.literal(true).optional(),
    banned: z.literal(true).optional(),
    banReason: z.literal(true).optional(),
    banExpires: z.literal(true).optional(),
    username: z.literal(true).optional(),
    firstname: z.literal(true).optional(),
    lastname: z.literal(true).optional(),
    pteroUserId: z.literal(true).optional(),
    address: z.literal(true).optional(),
    city: z.literal(true).optional(),
    zip: z.literal(true).optional(),
    country: z.literal(true).optional(),
    displayUsername: z.literal(true).optional()
}).strict();
export const UserMinAggregateInputObjectSchema = makeSchema();
export const UserMinAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserMinAggregateInput.schema.js.map