import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema';
import { DiscountUpdateWithoutProductInputObjectSchema as DiscountUpdateWithoutProductInputObjectSchema } from './DiscountUpdateWithoutProductInput.schema';
import { DiscountUncheckedUpdateWithoutProductInputObjectSchema as DiscountUncheckedUpdateWithoutProductInputObjectSchema } from './DiscountUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiscountWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DiscountUpdateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const DiscountUpdateToOneWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountUpdateToOneWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountUpdateToOneWithWhereWithoutProductInput>;
export const DiscountUpdateToOneWithWhereWithoutProductInputObjectZodSchema = makeSchema();
