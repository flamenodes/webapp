import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { StatusNodeWhereInputObjectSchema as StatusNodeWhereInputObjectSchema } from './objects/StatusNodeWhereInput.schema';

export const StatusNodeDeleteManySchema: z.ZodType<Prisma.StatusNodeDeleteManyArgs> = z.object({ where: StatusNodeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StatusNodeDeleteManyArgs>;

export const StatusNodeDeleteManyZodSchema = z.object({ where: StatusNodeWhereInputObjectSchema.optional() }).strict();