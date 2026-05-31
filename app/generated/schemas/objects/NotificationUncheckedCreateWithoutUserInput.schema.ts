import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  type: z.string().optional(),
  title: z.string(),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NotificationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput>;
export const NotificationUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
