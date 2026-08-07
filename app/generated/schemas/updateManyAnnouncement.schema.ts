import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { AnnouncementUpdateManyMutationInputObjectSchema as AnnouncementUpdateManyMutationInputObjectSchema } from './objects/AnnouncementUpdateManyMutationInput.schema';
import { AnnouncementWhereInputObjectSchema as AnnouncementWhereInputObjectSchema } from './objects/AnnouncementWhereInput.schema';

export const AnnouncementUpdateManySchema: z.ZodType<Prisma.AnnouncementUpdateManyArgs> = z.object({ data: AnnouncementUpdateManyMutationInputObjectSchema, where: AnnouncementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnnouncementUpdateManyArgs>;

export const AnnouncementUpdateManyZodSchema = z.object({ data: AnnouncementUpdateManyMutationInputObjectSchema, where: AnnouncementWhereInputObjectSchema.optional() }).strict();