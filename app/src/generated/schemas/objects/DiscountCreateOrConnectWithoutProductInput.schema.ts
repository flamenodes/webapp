import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './DiscountWhereUniqueInput.schema';
import { DiscountCreateWithoutProductInputObjectSchema as DiscountCreateWithoutProductInputObjectSchema } from './DiscountCreateWithoutProductInput.schema';
import { DiscountUncheckedCreateWithoutProductInputObjectSchema as DiscountUncheckedCreateWithoutProductInputObjectSchema } from './DiscountUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DiscountWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DiscountCreateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const DiscountCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountCreateOrConnectWithoutProductInput>;
export const DiscountCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
