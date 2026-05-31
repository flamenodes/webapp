import * as z from 'zod';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema';
import { DiscountUpdateWithoutProductInputObjectSchema as DiscountUpdateWithoutProductInputObjectSchema } from './DiscountUpdateWithoutProductInput.schema';
import { DiscountUncheckedUpdateWithoutProductInputObjectSchema as DiscountUncheckedUpdateWithoutProductInputObjectSchema } from './DiscountUncheckedUpdateWithoutProductInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => DiscountWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => DiscountUpdateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const DiscountUpdateToOneWithWhereWithoutProductInputObjectSchema = makeSchema();
export const DiscountUpdateToOneWithWhereWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountUpdateToOneWithWhereWithoutProductInput.schema.js.map