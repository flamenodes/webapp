import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    label: z.string(),
    percentage: z.number().int()
}).strict();
export const DiscountUncheckedCreateWithoutProductInputObjectSchema = makeSchema();
export const DiscountUncheckedCreateWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountUncheckedCreateWithoutProductInput.schema.js.map