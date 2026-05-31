import * as z from 'zod';
import { DiscountCreateWithoutProductInputObjectSchema as DiscountCreateWithoutProductInputObjectSchema } from './DiscountCreateWithoutProductInput.schema';
import { DiscountUncheckedCreateWithoutProductInputObjectSchema as DiscountUncheckedCreateWithoutProductInputObjectSchema } from './DiscountUncheckedCreateWithoutProductInput.schema';
import { DiscountCreateOrConnectWithoutProductInputObjectSchema as DiscountCreateOrConnectWithoutProductInputObjectSchema } from './DiscountCreateOrConnectWithoutProductInput.schema';
import { DiscountUpsertWithoutProductInputObjectSchema as DiscountUpsertWithoutProductInputObjectSchema } from './DiscountUpsertWithoutProductInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './DiscountWhereUniqueInput.schema';
import { DiscountUpdateToOneWithWhereWithoutProductInputObjectSchema as DiscountUpdateToOneWithWhereWithoutProductInputObjectSchema } from './DiscountUpdateToOneWithWhereWithoutProductInput.schema';
import { DiscountUpdateWithoutProductInputObjectSchema as DiscountUpdateWithoutProductInputObjectSchema } from './DiscountUpdateWithoutProductInput.schema';
import { DiscountUncheckedUpdateWithoutProductInputObjectSchema as DiscountUncheckedUpdateWithoutProductInputObjectSchema } from './DiscountUncheckedUpdateWithoutProductInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => DiscountCreateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedCreateWithoutProductInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => DiscountCreateOrConnectWithoutProductInputObjectSchema).optional(),
    upsert: z.lazy(() => DiscountUpsertWithoutProductInputObjectSchema).optional(),
    disconnect: z.union([z.boolean(), z.lazy(() => DiscountWhereInputObjectSchema)]).optional(),
    delete: z.union([z.boolean(), z.lazy(() => DiscountWhereInputObjectSchema)]).optional(),
    connect: z.lazy(() => DiscountWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => DiscountUpdateToOneWithWhereWithoutProductInputObjectSchema), z.lazy(() => DiscountUpdateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedUpdateWithoutProductInputObjectSchema)]).optional()
}).strict();
export const DiscountUpdateOneWithoutProductNestedInputObjectSchema = makeSchema();
export const DiscountUpdateOneWithoutProductNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=DiscountUpdateOneWithoutProductNestedInput.schema.js.map