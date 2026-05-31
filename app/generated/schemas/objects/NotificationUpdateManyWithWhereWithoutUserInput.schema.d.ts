import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput>;
export declare const NotificationUpdateManyWithWhereWithoutUserInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.NotificationScalarWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationScalarWhereInput, unknown>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.NotificationUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUpdateManyMutationInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationUncheckedUpdateManyWithoutUserInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationUpdateManyWithWhereWithoutUserInput.schema.d.ts.map