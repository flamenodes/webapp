import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementWhereUniqueInputObjectSchema as AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';

export const AnnouncementDeleteOneSchema: z.ZodType<Prisma.AnnouncementDeleteArgs> = z.object({ select: AnnouncementSelectObjectSchema.optional(),  where: AnnouncementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnnouncementDeleteArgs>;

export const AnnouncementDeleteOneZodSchema = z.object({ select: AnnouncementSelectObjectSchema.optional(),  where: AnnouncementWhereUniqueInputObjectSchema }).strict();