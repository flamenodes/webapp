import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    code: z.string().optional()
}).strict();
export const CouponWhereUniqueInputObjectSchema = makeSchema();
export const CouponWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=CouponWhereUniqueInput.schema.js.map