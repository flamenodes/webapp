import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { DiscountCreateWithoutProductInputObjectSchema as DiscountCreateWithoutProductInputObjectSchema } from './DiscountCreateWithoutProductInput.schema';
import { DiscountUncheckedCreateWithoutProductInputObjectSchema as DiscountUncheckedCreateWithoutProductInputObjectSchema } from './DiscountUncheckedCreateWithoutProductInput.schema';
import { DiscountCreateOrConnectWithoutProductInputObjectSchema as DiscountCreateOrConnectWithoutProductInputObjectSchema } from './DiscountCreateOrConnectWithoutProductInput.schema';
import { DiscountWhereUniqueInputObjectSchema as DiscountWhereUniqueInputObjectSchema } from './DiscountWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DiscountCreateWithoutProductInputObjectSchema), z.lazy(() => DiscountUncheckedCreateWithoutProductInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DiscountCreateOrConnectWithoutProductInputObjectSchema).optional(),
  connect: z.lazy(() => DiscountWhereUniqueInputObjectSchema).optional()
}).strict();
export const DiscountCreateNestedOneWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountCreateNestedOneWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountCreateNestedOneWithoutProductInput>;
export const DiscountCreateNestedOneWithoutProductInputObjectZodSchema = makeSchema();
