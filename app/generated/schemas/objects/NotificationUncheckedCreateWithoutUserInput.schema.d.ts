import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput>;
export declare const NotificationUncheckedCreateWithoutUserInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    title: z.ZodString;
    message: z.ZodString;
    read: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationUncheckedCreateWithoutUserInput.schema.d.ts.map