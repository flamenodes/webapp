import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigSelectObjectSchema as AiSupportConfigSelectObjectSchema } from './objects/AiSupportConfigSelect.schema';
import { AiSupportConfigUpdateInputObjectSchema as AiSupportConfigUpdateInputObjectSchema } from './objects/AiSupportConfigUpdateInput.schema';
import { AiSupportConfigUncheckedUpdateInputObjectSchema as AiSupportConfigUncheckedUpdateInputObjectSchema } from './objects/AiSupportConfigUncheckedUpdateInput.schema';
import { AiSupportConfigWhereUniqueInputObjectSchema as AiSupportConfigWhereUniqueInputObjectSchema } from './objects/AiSupportConfigWhereUniqueInput.schema';

export const AiSupportConfigUpdateOneSchema: z.ZodType<Prisma.AiSupportConfigUpdateArgs> = z.object({ select: AiSupportConfigSelectObjectSchema.optional(),  data: z.union([AiSupportConfigUpdateInputObjectSchema, AiSupportConfigUncheckedUpdateInputObjectSchema]), where: AiSupportConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigUpdateArgs>;

export const AiSupportConfigUpdateOneZodSchema = z.object({ select: AiSupportConfigSelectObjectSchema.optional(),  data: z.union([AiSupportConfigUpdateInputObjectSchema, AiSupportConfigUncheckedUpdateInputObjectSchema]), where: AiSupportConfigWhereUniqueInputObjectSchema }).strict();