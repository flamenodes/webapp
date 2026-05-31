import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionMaxAggregateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionMaxAggregateInputType>;
export declare const ConfigurationOptionMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    name: z.ZodOptional<z.ZodLiteral<true>>;
    label: z.ZodOptional<z.ZodLiteral<true>>;
    description: z.ZodOptional<z.ZodLiteral<true>>;
    type: z.ZodOptional<z.ZodLiteral<true>>;
    required: z.ZodOptional<z.ZodLiteral<true>>;
    category: z.ZodOptional<z.ZodLiteral<true>>;
    sortOrder: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionMaxAggregateInput.schema.d.ts.map