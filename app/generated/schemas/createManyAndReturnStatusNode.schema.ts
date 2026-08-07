import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeCreateManyInputObjectSchema as StatusNodeCreateManyInputObjectSchema } from './objects/StatusNodeCreateManyInput.schema';

export const StatusNodeCreateManyAndReturnSchema: z.ZodType<Prisma.StatusNodeCreateManyAndReturnArgs> = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: z.union([ StatusNodeCreateManyInputObjectSchema, z.array(StatusNodeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StatusNodeCreateManyAndReturnArgs>;

export const StatusNodeCreateManyAndReturnZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: z.union([ StatusNodeCreateManyInputObjectSchema, z.array(StatusNodeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();