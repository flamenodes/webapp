import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementWhereUniqueInputObjectSchema as AnnouncementWhereUniqueInputObjectSchema } from './objects/AnnouncementWhereUniqueInput.schema';
import { AnnouncementCreateInputObjectSchema as AnnouncementCreateInputObjectSchema } from './objects/AnnouncementCreateInput.schema';
import { AnnouncementUncheckedCreateInputObjectSchema as AnnouncementUncheckedCreateInputObjectSchema } from './objects/AnnouncementUncheckedCreateInput.schema';
import { AnnouncementUpdateInputObjectSchema as AnnouncementUpdateInputObjectSchema } from './objects/AnnouncementUpdateInput.schema';
import { AnnouncementUncheckedUpdateInputObjectSchema as AnnouncementUncheckedUpdateInputObjectSchema } from './objects/AnnouncementUncheckedUpdateInput.schema';

export const AnnouncementUpsertOneSchema: z.ZodType<Prisma.AnnouncementUpsertArgs> = z.object({ select: AnnouncementSelectObjectSchema.optional(),  where: AnnouncementWhereUniqueInputObjectSchema, create: z.union([ AnnouncementCreateInputObjectSchema, AnnouncementUncheckedCreateInputObjectSchema ]), update: z.union([ AnnouncementUpdateInputObjectSchema, AnnouncementUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AnnouncementUpsertArgs>;

export const AnnouncementUpsertOneZodSchema = z.object({ select: AnnouncementSelectObjectSchema.optional(),  where: AnnouncementWhereUniqueInputObjectSchema, create: z.union([ AnnouncementCreateInputObjectSchema, AnnouncementUncheckedCreateInputObjectSchema ]), update: z.union([ AnnouncementUpdateInputObjectSchema, AnnouncementUncheckedUpdateInputObjectSchema ]) }).strict();