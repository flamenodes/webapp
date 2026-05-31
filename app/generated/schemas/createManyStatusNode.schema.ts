import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { StatusNodeCreateManyInputObjectSchema as StatusNodeCreateManyInputObjectSchema } from './objects/StatusNodeCreateManyInput.schema';

export const StatusNodeCreateManySchema: z.ZodType<Prisma.StatusNodeCreateManyArgs> = z.object({ data: z.union([ StatusNodeCreateManyInputObjectSchema, z.array(StatusNodeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.StatusNodeCreateManyArgs>;

export const StatusNodeCreateManyZodSchema = z.object({ data: z.union([ StatusNodeCreateManyInputObjectSchema, z.array(StatusNodeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();