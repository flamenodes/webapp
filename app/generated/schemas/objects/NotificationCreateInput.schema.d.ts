import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationCreateInputObjectSchema: z.ZodType<Prisma.NotificationCreateInput>;
export declare const NotificationCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    message: z.ZodString;
    read: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    user: z.ZodLazy<z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput, unknown, z.core.$ZodTypeInternals<Prisma.UserCreateNestedOneWithoutNotificationsInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationCreateInput.schema.d.ts.map