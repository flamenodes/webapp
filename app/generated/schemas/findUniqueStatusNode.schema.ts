import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';

export const StatusNodeFindUniqueSchema: z.ZodType<Prisma.StatusNodeFindUniqueArgs> = z.object({ select: StatusNodeSelectObjectSchema.optional(),  where: StatusNodeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StatusNodeFindUniqueArgs>;

export const StatusNodeFindUniqueZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(),  where: StatusNodeWhereUniqueInputObjectSchema }).strict();