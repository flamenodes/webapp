import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementWhereUniqueInputObjectSchema as AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';

export const AnnouncementFindUniqueSchema: z.ZodType<Prisma.AnnouncementFindUniqueArgs> = z.object({ select: AnnouncementSelectObjectSchema.optional(),  where: AnnouncementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnnouncementFindUniqueArgs>;

export const AnnouncementFindUniqueZodSchema = z.object({ select: AnnouncementSelectObjectSchema.optional(),  where: AnnouncementWhereUniqueInputObjectSchema }).strict();