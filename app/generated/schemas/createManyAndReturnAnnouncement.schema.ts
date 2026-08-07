import type { Prisma } from '../../src/generated/prisma/browser';
import * as z from 'zod';
import { AnnouncementSelectObjectSchema as AnnouncementSelectObjectSchema } from './objects/AnnouncementSelect.schema';
import { AnnouncementCreateManyInputObjectSchema as AnnouncementCreateManyInputObjectSchema } from './objects/AnnouncementCreateManyInput.schema';

export const AnnouncementCreateManyAndReturnSchema: z.ZodType<Prisma.AnnouncementCreateManyAndReturnArgs> = z.object({ select: AnnouncementSelectObjectSchema.optional(), data: z.union([ AnnouncementCreateManyInputObjectSchema, z.array(AnnouncementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AnnouncementCreateManyAndReturnArgs>;

export const AnnouncementCreateManyAndReturnZodSchema = z.object({ select: AnnouncementSelectObjectSchema.optional(), data: z.union([ AnnouncementCreateManyInputObjectSchema, z.array(AnnouncementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();