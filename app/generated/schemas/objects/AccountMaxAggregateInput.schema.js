import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
    providerId: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    accessToken: z.literal(true).optional(),
    refreshToken: z.literal(true).optional(),
    idToken: z.literal(true).optional(),
    accessTokenExpiresAt: z.literal(true).optional(),
    refreshTokenExpiresAt: z.literal(true).optional(),
    scope: z.literal(true).optional(),
    password: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional()
}).strict();
export const AccountMaxAggregateInputObjectSchema = makeSchema();
export const AccountMaxAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountMaxAggregateInput.schema.js.map