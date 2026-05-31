import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const RazorpayConfigMinAggregateInputObjectSchema: z.ZodType<Prisma.RazorpayConfigMinAggregateInputType>;
export declare const RazorpayConfigMinAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    mode: z.ZodOptional<z.ZodLiteral<true>>;
    testKeyId: z.ZodOptional<z.ZodLiteral<true>>;
    testKeySecret: z.ZodOptional<z.ZodLiteral<true>>;
    prodKeyId: z.ZodOptional<z.ZodLiteral<true>>;
    prodKeySecret: z.ZodOptional<z.ZodLiteral<true>>;
    gstin: z.ZodOptional<z.ZodLiteral<true>>;
    companyName: z.ZodOptional<z.ZodLiteral<true>>;
    companyAddress: z.ZodOptional<z.ZodLiteral<true>>;
    companyCity: z.ZodOptional<z.ZodLiteral<true>>;
    companyZip: z.ZodOptional<z.ZodLiteral<true>>;
    companyCountry: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=RazorpayConfigMinAggregateInput.schema.d.ts.map