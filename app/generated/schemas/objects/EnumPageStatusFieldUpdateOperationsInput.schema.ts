import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { PageStatusSchema } from '../enums/PageStatus.schema'

const makeSchema = () => z.object({
  set: PageStatusSchema.optional()
}).strict();
export const EnumPageStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPageStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumPageStatusFieldUpdateOperationsInput>;
export const EnumPageStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
