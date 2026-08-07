import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';
import { DiscountUpdateWithoutProductInputObjectSchema as DiscountUpdateWithoutProductInputObjectSchema } from './DiscountUpdateWithoutProductInput.schema';
import { DiscountUncheckedUpdateWithoutProductInputObjectSchema as DiscountUncheckedUpdateWithoutProductInputObjectSchema } from './DiscountUncheckedUpdateWithoutProductInput.schema';
import { DiscountCreateWithoutProductInputObjectSchema as DiscountCreateWithoutProductInputObjectSchema } from './DiscountCreateWithoutProductInput.schema';
import { DiscountUncheckedCreateWithoutProductInputObjectSchema as DiscountUncheckedCreateWithoutProductInputObjectSchema } from './DiscountUncheckedCreateWithoutProductInput.schema';
import { DiscountWhereInputObjectSchema as DiscountWhereInputObjectSchema } from './DiscountWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DiscountUpdateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => DiscountCreateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedCreateWithoutProductInputObjectSchema)]),
  where: z.lazy(() => DiscountWhereInputObjectSchema).optional()
}).strict();
export const DiscountUpsertWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountUpsertWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountUpsertWithoutProductInput>;
export const DiscountUpsertWithoutProductInputObjectZodSchema = makeSchema();
