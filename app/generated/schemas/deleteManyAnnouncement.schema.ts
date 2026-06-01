import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
import { AnnouncementWhereInputObjectSchema as AnnouncementWhereInputObjectSchema } from './objects/AnnouncementWhereInput.schema';

export const AnnouncementDeleteManySchema: z.ZodType<Prisma.AnnouncementDeleteManyArgs> = z.object({ where: AnnouncementWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AnnouncementDeleteManyArgs>;

export const AnnouncementDeleteManyZodSchema = z.object({ where: AnnouncementWhereInputObjectSchema.optional() }).strict();