import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeCreateInputObjectSchema as StatusNodeCreateInputObjectSchema } from './objects/StatusNodeCreateInput.schema';
import { StatusNodeUncheckedCreateInputObjectSchema as StatusNodeUncheckedCreateInputObjectSchema } from './objects/StatusNodeUncheckedCreateInput.schema';

export const StatusNodeCreateOneSchema: z.ZodType<Prisma.StatusNodeCreateArgs> = z.object({ select: StatusNodeSelectObjectSchema.optional(),  data: z.union([StatusNodeCreateInputObjectSchema, StatusNodeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.StatusNodeCreateArgs>;

export const StatusNodeCreateOneZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(),  data: z.union([StatusNodeCreateInputObjectSchema, StatusNodeUncheckedCreateInputObjectSchema]) }).strict();