import * as z from 'zod';
import type { Prisma } from '../../prisma/browser';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCartNestedInputObjectSchema as UserUpdateOneRequiredWithoutCartNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCartNestedInput.schema';
import { CartItemUpdateManyWithoutCartNestedInputObjectSchema as CartItemUpdateManyWithoutCartNestedInputObjectSchema } from './CartItemUpdateManyWithoutCartNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  couponCode: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updatedAt: z.union([z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/, "Invalid RFC3339 date-time"), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCartNestedInputObjectSchema).optional(),
  items: z.lazy(() => CartItemUpdateManyWithoutCartNestedInputObjectSchema).optional()
}).strict();
export const CartUpdateInputObjectSchema: z.ZodType<Prisma.CartUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartUpdateInput>;
export const CartUpdateInputObjectZodSchema = makeSchema();
