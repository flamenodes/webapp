import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { BillingPeriodSchema } from '../enums/BillingPeriod.schema'

const makeSchema = () => z.object({
  set: BillingPeriodSchema.optional()
}).strict();
export const EnumBillingPeriodFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumBillingPeriodFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumBillingPeriodFieldUpdateOperationsInput>;
export const EnumBillingPeriodFieldUpdateOperationsInputObjectZodSchema = makeSchema();
