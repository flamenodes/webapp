import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementUpdateManyMutationInputObjectSchema as AnnouncementUpdateManyMutationInputObjectSchema } from './objects/AnnouncementUpdateManyMutationInput.schema';
import { AnnouncementWhereInputObjectSchema as AnnouncementWhereInputObjectSchema } from './objects/AnnouncementWhereInput.schema';

export const AnnouncementUpdateManyAndReturnSchema: z.ZodType<Prisma.AnnouncementUpdateManyAndReturnArgs> = z.object({ select: AnnouncementSelectObjectSchema.optional(), data: AnnouncementUpdateManyMutationInputObjectSchema, where: AnnouncementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnnouncementUpdateManyAndReturnArgs>;

export const AnnouncementUpdateManyAndReturnZodSchema = z.object({ select: AnnouncementSelectObjectSchema.optional(), data: AnnouncementUpdateManyMutationInputObjectSchema, where: AnnouncementWhereInputObjectSchema.optional() }).strict();