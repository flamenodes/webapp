import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const NotificationWhereUniqueInputObjectSchema: z.ZodType<Prisma.NotificationWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.NotificationWhereUniqueInput>;
export const NotificationWhereUniqueInputObjectZodSchema = makeSchema();
