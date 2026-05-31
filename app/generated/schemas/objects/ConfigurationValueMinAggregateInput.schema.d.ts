import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationValueMinAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationValueMinAggregateInputType>;
export declare const ConfigurationValueMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    optionId: z.ZodOptional<z.ZodLiteral<true>>;
    label: z.ZodOptional<z.ZodLiteral<true>>;
    value: z.ZodOptional<z.ZodLiteral<true>>;
    description: z.ZodOptional<z.ZodLiteral<true>>;
    priceModifier: z.ZodOptional<z.ZodLiteral<true>>;
    sortOrder: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationValueMinAggregateInput.schema.d.ts.map