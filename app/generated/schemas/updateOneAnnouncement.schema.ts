import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementUpdateInputObjectSchema as AnnouncementUpdateInputObjectSchema } from './objects/AnnouncementUpdateInput.schema';
import { AnnouncementUncheckedUpdateInputObjectSchema as AnnouncementUncheckedUpdateInputObjectSchema } from './objects/AnnouncementUncheckedUpdateInput.schema';
import { AnnouncementWhereUniqueInputObjectSchema as AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';

export const AnnouncementUpdateOneSchema: z.ZodType<Prisma.AnnouncementUpdateArgs> = z.object({ select: AnnouncementSelectObjectSchema.optional(),  data: z.union([AnnouncementUpdateInputObjectSchema, AnnouncementUncheckedUpdateInputObjectSchema]), where: AnnouncementWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AnnouncementUpdateArgs>;

export const AnnouncementUpdateOneZodSchema = z.object({ select: AnnouncementSelectObjectSchema.optional(),  data: z.union([AnnouncementUpdateInputObjectSchema, AnnouncementUncheckedUpdateInputObjectSchema]), where: AnnouncementWhereUniqueInputObjectSchema }).strict();