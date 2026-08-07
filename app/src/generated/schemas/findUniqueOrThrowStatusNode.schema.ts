import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';

export const StatusNodeFindUniqueOrThrowSchema: z.ZodType<Prisma.StatusNodeFindUniqueOrThrowArgs> = z.object({ select: StatusNodeSelectObjectSchema.optional(),  where: StatusNodeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.StatusNodeFindUniqueOrThrowArgs>;

export const StatusNodeFindUniqueOrThrowZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(),  where: StatusNodeWhereUniqueInputObjectSchema }).strict();