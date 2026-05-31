import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string(),
    accountId: z.string(),
    providerId: z.string(),
    accessToken: z.string().optional().nullable(),
    refreshToken: z.string().optional().nullable(),
    idToken: z.string().optional().nullable(),
    accessTokenExpiresAt: z.coerce.date().optional().nullable(),
    refreshTokenExpiresAt: z.coerce.date().optional().nullable(),
    scope: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional()
}).strict();
export const AccountCreateManyUserInputObjectSchema = makeSchema();
export const AccountCreateManyUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCreateManyUserInput.schema.js.map