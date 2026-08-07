import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigSelectObjectSchema as AiSupportConfigSelectObjectSchema } from './objects/AiSupportConfigSelect.schema';
import { AiSupportConfigWhereUniqueInputObjectSchema as AiSupportConfigWhereUniqueInputObjectSchema } from './objects/AiSupportConfigWhereUniqueInput.schema';
import { AiSupportConfigCreateInputObjectSchema as AiSupportConfigCreateInputObjectSchema } from './objects/AiSupportConfigCreateInput.schema';
import { AiSupportConfigUncheckedCreateInputObjectSchema as AiSupportConfigUncheckedCreateInputObjectSchema } from './objects/AiSupportConfigUncheckedCreateInput.schema';
import { AiSupportConfigUpdateInputObjectSchema as AiSupportConfigUpdateInputObjectSchema } from './objects/AiSupportConfigUpdateInput.schema';
import { AiSupportConfigUncheckedUpdateInputObjectSchema as AiSupportConfigUncheckedUpdateInputObjectSchema } from './objects/AiSupportConfigUncheckedUpdateInput.schema';

export const AiSupportConfigUpsertOneSchema: z.ZodType<Prisma.AiSupportConfigUpsertArgs> = z.object({ select: AiSupportConfigSelectObjectSchema.optional(),  where: AiSupportConfigWhereUniqueInputObjectSchema, create: z.union([ AiSupportConfigCreateInputObjectSchema, AiSupportConfigUncheckedCreateInputObjectSchema ]), update: z.union([ AiSupportConfigUpdateInputObjectSchema, AiSupportConfigUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigUpsertArgs>;

export const AiSupportConfigUpsertOneZodSchema = z.object({ select: AiSupportConfigSelectObjectSchema.optional(),  where: AiSupportConfigWhereUniqueInputObjectSchema, create: z.union([ AiSupportConfigCreateInputObjectSchema, AiSupportConfigUncheckedCreateInputObjectSchema ]), update: z.union([ AiSupportConfigUpdateInputObjectSchema, AiSupportConfigUncheckedUpdateInputObjectSchema ]) }).strict();