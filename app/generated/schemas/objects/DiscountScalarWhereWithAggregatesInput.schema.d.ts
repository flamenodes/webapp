import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput>;
export declare const DiscountScalarWhereWithAggregatesInputObjectZodSchema: z.ZodObject<{
    AND: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountScalarWhereWithAggregatesInput, unknown>>>>]>>;
    OR: z.ZodOptional<z.ZodArray<z.ZodLazy<z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountScalarWhereWithAggregatesInput, unknown>>>>>;
    NOT: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountScalarWhereWithAggregatesInput, unknown>>>, z.ZodArray<z.ZodLazy<z.ZodType<Prisma.DiscountScalarWhereWithAggregatesInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountScalarWhereWithAggregatesInput, unknown>>>>]>>;
    id: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    label: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.StringWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.StringWithAggregatesFilter<never>, unknown>>>, z.ZodString]>>;
    percentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.IntWithAggregatesFilter<never>, unknown, z.core.$ZodTypeInternals<Prisma.IntWithAggregatesFilter<never>, unknown>>>, z.ZodNumber]>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountScalarWhereWithAggregatesInput.schema.d.ts.map