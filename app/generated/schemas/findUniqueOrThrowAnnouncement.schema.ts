import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementWhereUniqueInputObjectSchema as AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';

export const AnnouncementFindUniqueOrThrowSchema: z.ZodType<Prisma.AnnouncementFindUniqueOrThrowArgs> = z.object({ select: AnnouncementSelectObjectSchema.optional(),  where: AnnouncementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnnouncementFindUniqueOrThrowArgs>;

export const AnnouncementFindUniqueOrThrowZodSchema = z.object({ select: AnnouncementSelectObjectSchema.optional(),  where: AnnouncementWhereUniqueInputObjectSchema }).strict();