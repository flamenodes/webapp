import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { AnnouncementTypeSchema } from '../enums/AnnouncementType.schema'

const makeSchema = () => z.object({
  set: AnnouncementTypeSchema.optional()
}).strict();
export const EnumAnnouncementTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumAnnouncementTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumAnnouncementTypeFieldUpdateOperationsInput>;
export const EnumAnnouncementTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
