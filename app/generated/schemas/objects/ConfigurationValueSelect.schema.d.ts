import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueSelectObjectSchema: z.ZodType<Prisma.ConfigurationValueSelect>;
export declare const ConfigurationValueSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    optionId: z.ZodOptional<z.ZodBoolean>;
    option: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationOptionInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    label: z.ZodOptional<z.ZodBoolean>;
    value: z.ZodOptional<z.ZodBoolean>;
    description: z.ZodOptional<z.ZodBoolean>;
    priceModifier: z.ZodOptional<z.ZodBoolean>;
    metadata: z.ZodOptional<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueSelect.schema.d.ts.map