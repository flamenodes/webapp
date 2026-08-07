import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';
import { StatusNodeCreateInputObjectSchema as StatusNodeCreateInputObjectSchema } from './objects/StatusNodeCreateInput.schema';
import { StatusNodeUncheckedCreateInputObjectSchema as StatusNodeUncheckedCreateInputObjectSchema } from './objects/StatusNodeUncheckedCreateInput.schema';
import { StatusNodeUpdateInputObjectSchema as StatusNodeUpdateInputObjectSchema } from './objects/StatusNodeUpdateInput.schema';
import { StatusNodeUncheckedUpdateInputObjectSchema as StatusNodeUncheckedUpdateInputObjectSchema } from './objects/StatusNodeUncheckedUpdateInput.schema';

export const StatusNodeUpsertOneSchema: z.ZodType<Prisma.StatusNodeUpsertArgs> = z.object({ select: StatusNodeSelectObjectSchema.optional(),  where: StatusNodeWhereUniqueInputObjectSchema, create: z.union([ StatusNodeCreateInputObjectSchema, StatusNodeUncheckedCreateInputObjectSchema ]), update: z.union([ StatusNodeUpdateInputObjectSchema, StatusNodeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.StatusNodeUpsertArgs>;

export const StatusNodeUpsertOneZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(),  where: StatusNodeWhereUniqueInputObjectSchema, create: z.union([ StatusNodeCreateInputObjectSchema, StatusNodeUncheckedCreateInputObjectSchema ]), update: z.union([ StatusNodeUpdateInputObjectSchema, StatusNodeUncheckedUpdateInputObjectSchema ]) }).strict();