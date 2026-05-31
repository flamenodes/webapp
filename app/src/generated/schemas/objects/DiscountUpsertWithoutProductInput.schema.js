import * as z from 'zod';
import { DiscountUpdateWithoutProductInputObjectSchema as DiscountUpdateWithoutProductInputObjectSchema } from './DiscountUpdateWithoutProductInput.schema';
import { DiscountUncheckedUpdateWithoutProductInputObjectSchema as DiscountUncheckedUpdateWithoutProductInputObjectSchema } from './DiscountUncheckedUpdateWithoutProductInput.schema';
import { DiscountCreateWithoutProductInputObjectSchema as DiscountCreateWithoutProductInputObjectSchema } from './DiscountCreateWithoutProductInput.schema';
import { DiscountUncheckedCreateWithoutProductInputObjectSchema as DiscountUncheckedCreateWithoutProductInputObjectSchema } from './DiscountUncheckedCreateWithoutProductInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => DiscountUpdateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedUpdateWithoutProductInputObjectSchema)]),
    create: z.union([z.lazy(() => DiscountCreateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedCreateWithoutProductInputObjectSchema)]),
    where: z.lazy(() => DiscountWhereInputObjectSchema).optional()
}).strict();
export const DiscountUpsertWithoutProductInputObjectSchema = makeSchema();
export const DiscountUpsertWithoutProductInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountUpsertWithoutProductInput.schema.js.map