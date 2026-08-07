import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigCreateManyInputObjectSchema as AiSupportConfigCreateManyInputObjectSchema } from './objects/AiSupportConfigCreateManyInput.schema';

export const AiSupportConfigCreateManySchema: z.ZodType<Prisma.AiSupportConfigCreateManyArgs> = z.object({ data: z.union([ AiSupportConfigCreateManyInputObjectSchema, z.array(AiSupportConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigCreateManyArgs>;

export const AiSupportConfigCreateManyZodSchema = z.object({ data: z.union([ AiSupportConfigCreateManyInputObjectSchema, z.array(AiSupportConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();