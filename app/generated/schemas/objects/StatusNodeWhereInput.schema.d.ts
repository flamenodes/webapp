import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StatusNodeWhereInputObjectSchema: z.ZodType<Prisma.StatusNodeWhereInput>;
export declare const StatusNodeWhereInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.StatusNodeWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.StatusNodeWhereInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    name: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    ip: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    location: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    type: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    port: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntFilter<never>, unknown>>>, z.ZodNumber]>>;
    protocol: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringFilter<never>, unknown>>>, z.ZodString]>>;
    latency: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntNullableFilter<never>, unknown>>>, z.ZodNumber]>>>;
    lastChecked: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeNullableFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>>;
    cpu: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.FloatNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.FloatNullableFilter<never>, unknown>>>, z.ZodNumber]>>>;
    memory: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntNullableFilter<never>, unknown>>>, z.ZodNumber]>>>;
    disk: z.ZodNullable<z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntNullableFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntNullableFilter<never>, unknown>>>, z.ZodNumber]>>>;
    createdAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
    updatedAt: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DateTimeFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.DateTimeFilter<never>, unknown>>>, z.ZodCoercedDate<unknown>]>>;
}, z.core.$strict>;
//# sourceMappingURL=StatusNodeWhereInput.schema.d.ts.map