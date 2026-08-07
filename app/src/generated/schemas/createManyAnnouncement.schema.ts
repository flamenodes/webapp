import type { Prisma } from '../prisma/browser';
import * as z from 'zod';
import { AnnouncementCreateManyInputObjectSchema as AnnouncementCreateManyInputObjectSchema } from './objects/AnnouncementCreateManyInput.schema';

export const AnnouncementCreateManySchema: z.ZodType<Prisma.AnnouncementCreateManyArgs> = z.object({ data: z.union([ AnnouncementCreateManyInputObjectSchema, z.array(AnnouncementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AnnouncementCreateManyArgs>;

export const AnnouncementCreateManyZodSchema = z.object({ data: z.union([ AnnouncementCreateManyInputObjectSchema, z.array(AnnouncementCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();