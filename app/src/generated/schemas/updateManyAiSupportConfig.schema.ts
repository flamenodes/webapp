import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigUpdateManyMutationInputObjectSchema as AiSupportConfigUpdateManyMutationInputObjectSchema } from './objects/AiSupportConfigUpdateManyMutationInput.schema';
import { AiSupportConfigWhereInputObjectSchema as AiSupportConfigWhereInputObjectSchema } from './objects/AiSupportConfigWhereInput.schema';

export const AiSupportConfigUpdateManySchema: z.ZodType<Prisma.AiSupportConfigUpdateManyArgs> = z.object({ data: AiSupportConfigUpdateManyMutationInputObjectSchema, where: AiSupportConfigWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigUpdateManyArgs>;

export const AiSupportConfigUpdateManyZodSchema = z.object({ data: AiSupportConfigUpdateManyMutationInputObjectSchema, where: AiSupportConfigWhereInputObjectSchema.optional() }).strict();