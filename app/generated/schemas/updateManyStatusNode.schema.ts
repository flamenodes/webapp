import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { StatusNodeUpdateManyMutationInputObjectSchema as StatusNodeUpdateManyMutationInputObjectSchema } from './objects/StatusNodeUpdateManyMutationInput.schema';
import { StatusNodeWhereInputObjectSchema as StatusNodeWhereInputObjectSchema } from './objects/StatusNodeWhereInput.schema';

export const StatusNodeUpdateManySchema: z.ZodType<Prisma.StatusNodeUpdateManyArgs> = z.object({ data: StatusNodeUpdateManyMutationInputObjectSchema, where: StatusNodeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StatusNodeUpdateManyArgs>;

export const StatusNodeUpdateManyZodSchema = z.object({ data: StatusNodeUpdateManyMutationInputObjectSchema, where: StatusNodeWhereInputObjectSchema.optional() }).strict();