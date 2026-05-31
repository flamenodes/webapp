import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationCreateManyInputObjectSchema: z.ZodType<Prisma.NotificationCreateManyInput>;
export declare const NotificationCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    userId: z.ZodString;
    type: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    message: z.ZodString;
    read: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationCreateManyInput.schema.d.ts.map