import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigSelectObjectSchema as AiSupportConfigSelectObjectSchema } from './objects/AiSupportConfigSelect.schema';
import { AiSupportConfigCreateInputObjectSchema as AiSupportConfigCreateInputObjectSchema } from './objects/AiSupportConfigCreateInput.schema';
import { AiSupportConfigUncheckedCreateInputObjectSchema as AiSupportConfigUncheckedCreateInputObjectSchema } from './objects/AiSupportConfigUncheckedCreateInput.schema';

export const AiSupportConfigCreateOneSchema: z.ZodType<Prisma.AiSupportConfigCreateArgs> = z.object({ select: AiSupportConfigSelectObjectSchema.optional(),  data: z.union([AiSupportConfigCreateInputObjectSchema, AiSupportConfigUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigCreateArgs>;

export const AiSupportConfigCreateOneZodSchema = z.object({ select: AiSupportConfigSelectObjectSchema.optional(),  data: z.union([AiSupportConfigCreateInputObjectSchema, AiSupportConfigUncheckedCreateInputObjectSchema]) }).strict();