import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationCreateManyUserInputObjectSchema: z.ZodType<Prisma.NotificationCreateManyUserInput>;
export declare const NotificationCreateManyUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    message: z.ZodString;
    read: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationCreateManyUserInput.schema.d.ts.map