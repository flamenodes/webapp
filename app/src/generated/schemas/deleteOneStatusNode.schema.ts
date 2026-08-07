import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';

export const StatusNodeDeleteOneSchema: z.ZodType<Prisma.StatusNodeDeleteArgs> = z.object({ select: StatusNodeSelectObjectSchema.optional(),  where: StatusNodeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StatusNodeDeleteArgs>;

export const StatusNodeDeleteOneZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(),  where: StatusNodeWhereUniqueInputObjectSchema }).strict();