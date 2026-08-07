import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigSelectObjectSchema as AiSupportConfigSelectObjectSchema } from './objects/AiSupportConfigSelect.schema';
import { AiSupportConfigCreateManyInputObjectSchema as AiSupportConfigCreateManyInputObjectSchema } from './objects/AiSupportConfigCreateManyInput.schema';

export const AiSupportConfigCreateManyAndReturnSchema: z.ZodType<Prisma.AiSupportConfigCreateManyAndReturnArgs> = z.object({ select: AiSupportConfigSelectObjectSchema.optional(), data: z.union([ AiSupportConfigCreateManyInputObjectSchema, z.array(AiSupportConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigCreateManyAndReturnArgs>;

export const AiSupportConfigCreateManyAndReturnZodSchema = z.object({ select: AiSupportConfigSelectObjectSchema.optional(), data: z.union([ AiSupportConfigCreateManyInputObjectSchema, z.array(AiSupportConfigCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();