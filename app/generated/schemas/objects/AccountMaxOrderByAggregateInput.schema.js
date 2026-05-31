import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    accountId: SortOrderSchema.optional(),
    providerId: SortOrderSchema.optional(),
    userId: SortOrderSchema.optional(),
    accessToken: SortOrderSchema.optional(),
    refreshToken: SortOrderSchema.optional(),
    idToken: SortOrderSchema.optional(),
    accessTokenExpiresAt: SortOrderSchema.optional(),
    refreshTokenExpiresAt: SortOrderSchema.optional(),
    scope: SortOrderSchema.optional(),
    password: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const AccountMaxOrderByAggregateInputObjectSchema = makeSchema();
export const AccountMaxOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountMaxOrderByAggregateInput.schema.js.map