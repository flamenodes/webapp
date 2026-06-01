import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementCreateInputObjectSchema as AnnouncementCreateInputObjectSchema } from './objects/AnnouncementCreateInput.schema';
import { AnnouncementUncheckedCreateInputObjectSchema as AnnouncementUncheckedCreateInputObjectSchema } from './objects/AnnouncementUncheckedCreateInput.schema';

export const AnnouncementCreateOneSchema: z.ZodType<Prisma.AnnouncementCreateArgs> = z.object({ select: AnnouncementSelectObjectSchema.optional(),  data: z.union([AnnouncementCreateInputObjectSchema, AnnouncementUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AnnouncementCreateArgs>;

export const AnnouncementCreateOneZodSchema = z.object({ select: AnnouncementSelectObjectSchema.optional(),  data: z.union([AnnouncementCreateInputObjectSchema, AnnouncementUncheckedCreateInputObjectSchema]) }).strict();