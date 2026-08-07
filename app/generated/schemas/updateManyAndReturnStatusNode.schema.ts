import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeUpdateManyMutationInputObjectSchema as StatusNodeUpdateManyMutationInputObjectSchema } from './objects/StatusNodeUpdateManyMutationInput.schema';
import { StatusNodeWhereInputObjectSchema as StatusNodeWhereInputObjectSchema } from './objects/StatusNodeWhereInput.schema';

export const StatusNodeUpdateManyAndReturnSchema: z.ZodType<Prisma.StatusNodeUpdateManyAndReturnArgs> = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: StatusNodeUpdateManyMutationInputObjectSchema, where: StatusNodeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.StatusNodeUpdateManyAndReturnArgs>;

export const StatusNodeUpdateManyAndReturnZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: StatusNodeUpdateManyMutationInputObjectSchema, where: StatusNodeWhereInputObjectSchema.optional() }).strict();