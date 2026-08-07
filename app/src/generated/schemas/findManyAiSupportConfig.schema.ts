import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AiSupportConfigOrderByWithRelationInputObjectSchema as AiSupportConfigOrderByWithRelationInputObjectSchema } from './objects/AiSupportConfigOrderByWithRelationInput.schema';
import { AiSupportConfigWhereInputObjectSchema as AiSupportConfigWhereInputObjectSchema } from './objects/AiSupportConfigWhereInput.schema';
import { AiSupportConfigWhereUniqueInputObjectSchema as AiSupportConfigWhereUniqueInputObjectSchema } from './objects/AiSupportConfigWhereUniqueInput.schema';
import { AiSupportConfigScalarFieldEnumSchema } from './enums/AiSupportConfigScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AiSupportConfigFindManySelectSchema: z.ZodType<Prisma.AiSupportConfigSelect> = z.object({
    id: z.boolean().optional(),
    enabled: z.boolean().optional(),
    systemPrompt: z.boolean().optional(),
    model: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigSelect>;

export const AiSupportConfigFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    enabled: z.boolean().optional(),
    systemPrompt: z.boolean().optional(),
    model: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const AiSupportConfigFindManySchema: z.ZodType<Prisma.AiSupportConfigFindManyArgs> = z.object({ select: AiSupportConfigFindManySelectSchema.optional(),  orderBy: z.union([AiSupportConfigOrderByWithRelationInputObjectSchema, AiSupportConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiSupportConfigWhereInputObjectSchema.optional(), cursor: AiSupportConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiSupportConfigScalarFieldEnumSchema, AiSupportConfigScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AiSupportConfigFindManyArgs>;

export const AiSupportConfigFindManyZodSchema = z.object({ select: AiSupportConfigFindManySelectSchema.optional(),  orderBy: z.union([AiSupportConfigOrderByWithRelationInputObjectSchema, AiSupportConfigOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiSupportConfigWhereInputObjectSchema.optional(), cursor: AiSupportConfigWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiSupportConfigScalarFieldEnumSchema, AiSupportConfigScalarFieldEnumSchema.array()]).optional() }).strict();