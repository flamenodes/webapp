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
    displayUsername: z.literal(true).optional()
}).strict();
export const UserMaxAggregateInputObjectSchema = makeSchema();
export const UserMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserMaxAggregateInput.schema.js.map