import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  percentage: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const DiscountUncheckedUpdateWithoutProductInputObjectSchema: z.ZodType<Prisma.DiscountUncheckedUpdateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.DiscountUncheckedUpdateWithoutProductInput>;
export const DiscountUncheckedUpdateWithoutProductInputObjectZodSchema = makeSchema();
