import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigWhereInputObjectSchema as AiSupportConfigWhereInputObjectSchema } from './objects/AiSupportConfigWhereInput.schema';

export const AiSupportConfigDeleteManySchema: z.ZodType<Prisma.AiSupportConfigDeleteManyArgs> = z.object({ where: AiSupportConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigDeleteManyArgs>;

export const AiSupportConfigDeleteManyZodSchema = z.object({ where: AiSupportConfigWhereInputObjectSchema.optional() }).strict();