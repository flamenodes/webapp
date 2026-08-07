import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigSelectObjectSchema as AiSupportConfigSelectObjectSchema } from './objects/AiSupportConfigSelect.schema';
import { AiSupportConfigUpdateManyMutationInputObjectSchema as AiSupportConfigUpdateManyMutationInputObjectSchema } from './objects/AiSupportConfigUpdateManyMutationInput.schema';
import { AiSupportConfigWhereInputObjectSchema as AiSupportConfigWhereInputObjectSchema } from './objects/AiSupportConfigWhereInput.schema';

export const AiSupportConfigUpdateManyAndReturnSchema: z.ZodType<Prisma.AiSupportConfigUpdateManyAndReturnArgs> = z.object({ select: AiSupportConfigSelectObjectSchema.optional(), data: AiSupportConfigUpdateManyMutationInputObjectSchema, where: AiSupportConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigUpdateManyAndReturnArgs>;

export const AiSupportConfigUpdateManyAndReturnZodSchema = z.object({ select: AiSupportConfigSelectObjectSchema.optional(), data: AiSupportConfigUpdateManyMutationInputObjectSchema, where: AiSupportConfigWhereInputObjectSchema.optional() }).strict();