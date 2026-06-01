import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const AnnouncementWhereUniqueInputObjectSchema: z.ZodType<Prisma.AnnouncementWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AnnouncementWhereUniqueInput>;
export const AnnouncementWhereUniqueInputObjectZodSchema = makeSchema();
