import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { RazorpayConfigSelectObjectSchema as RazorpayConfigSelectObjectSchema } from './objects/RazorpayConfigSelect.schema';
import { RazorpayConfigWhereUniqueInputObjectSchema as RazorpayConfigWhereUniqueInputObjectSchema } from './objects/RazorpayConfigWhereUniqueInput.schema';
import { RazorpayConfigCreateInputObjectSchema as RazorpayConfigCreateInputObjectSchema } from './objects/RazorpayConfigCreateInput.schema';
import { RazorpayConfigUncheckedCreateInputObjectSchema as RazorpayConfigUncheckedCreateInputObjectSchema } from './objects/RazorpayConfigUncheckedCreateInput.schema';
import { RazorpayConfigUpdateInputObjectSchema as RazorpayConfigUpdateInputObjectSchema } from './objects/RazorpayConfigUpdateInput.schema';
import { RazorpayConfigUncheckedUpdateInputObjectSchema as RazorpayConfigUncheckedUpdateInputObjectSchema } from './objects/RazorpayConfigUncheckedUpdateInput.schema';

export const RazorpayConfigUpsertOneSchema: z.ZodType<Prisma.RazorpayConfigUpsertArgs> = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  where: RazorpayConfigWhereUniqueInputObjectSchema, create: z.union([ RazorpayConfigCreateInputObjectSchema, RazorpayConfigUncheckedCreateInputObjectSchema ]), update: z.union([ RazorpayConfigUpdateInputObjectSchema, RazorpayConfigUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.RazorpayConfigUpsertArgs>;

export const RazorpayConfigUpsertOneZodSchema = z.object({ select: RazorpayConfigSelectObjectSchema.optional(),  where: RazorpayConfigWhereUniqueInputObjectSchema, create: z.union([ RazorpayConfigCreateInputObjectSchema, RazorpayConfigUncheckedCreateInputObjectSchema ]), update: z.union([ RazorpayConfigUpdateInputObjectSchema, RazorpayConfigUncheckedUpdateInputObjectSchema ]) }).strict();