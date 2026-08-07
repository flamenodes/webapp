import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigSelectObjectSchema as AiSupportConfigSelectObjectSchema } from './objects/AiSupportConfigSelect.schema';
import { AiSupportConfigWhereUniqueInputObjectSchema as AiSupportConfigWhereUniqueInputObjectSchema } from './objects/AiSupportConfigWhereUniqueInput.schema';

export const AiSupportConfigFindUniqueSchema: z.ZodType<Prisma.AiSupportConfigFindUniqueArgs> = z.object({ select: AiSupportConfigSelectObjectSchema.optional(),  where: AiSupportConfigWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigFindUniqueArgs>;

export const AiSupportConfigFindUniqueZodSchema = z.object({ select: AiSupportConfigSelectObjectSchema.optional(),  where: AiSupportConfigWhereUniqueInputObjectSchema }).strict();