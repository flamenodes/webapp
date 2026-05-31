import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const NotificationListRelationFilterObjectSchema: z.ZodType<Prisma.NotificationListRelationFilter>;
export declare const NotificationListRelationFilterObjectZodSchema: z.ZodObject<{
    every: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>>;
    some: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>>;
    none: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.NotificationWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.NotificationWhereInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=NotificationListRelationFilter.schema.d.ts.map