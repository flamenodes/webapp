import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    code: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    amount: SortOrderSchema.optional(),
    description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    active: SortOrderSchema.optional(),
    expiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    maxUses: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    usedCount: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const CouponOrderByWithRelationInputObjectSchema = makeSchema();
export const CouponOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponOrderByWithRelationInput.schema.js.map