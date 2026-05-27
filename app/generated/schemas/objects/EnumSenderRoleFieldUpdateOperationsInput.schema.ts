import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
import { SenderRoleSchema } from '../enums/SenderRole.schema'

const makeSchema = () => z.object({
  set: SenderRoleSchema.optional()
}).strict();
export const EnumSenderRoleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSenderRoleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSenderRoleFieldUpdateOperationsInput>;
export const EnumSenderRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
