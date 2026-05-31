import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueCountAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueCountAggregateInputType>;
export declare const ConfigurationValueCountAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    optionId: z.ZodOptional<z.ZodLiteral<true>>;
    label: z.ZodOptional<z.ZodLiteral<true>>;
    value: z.ZodOptional<z.ZodLiteral<true>>;
    description: z.ZodOptional<z.ZodLiteral<true>>;
    priceModifier: z.ZodOptional<z.ZodLiteral<true>>;
    metadata: z.ZodOptional<z.ZodLiteral<true>>;
    sortOrder: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    _all: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueCountAggregateInput.schema.d.ts.map