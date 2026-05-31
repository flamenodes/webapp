import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const RazorpayConfigSelectObjectSchema: z.ZodType<Prisma.RazorpayConfigSelect>;
export declare const RazorpayConfigSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    mode: z.ZodOptional<z.ZodBoolean>;
    testKeyId: z.ZodOptional<z.ZodBoolean>;
    testKeySecret: z.ZodOptional<z.ZodBoolean>;
    prodKeyId: z.ZodOptional<z.ZodBoolean>;
    prodKeySecret: z.ZodOptional<z.ZodBoolean>;
    gstin: z.ZodOptional<z.ZodBoolean>;
    companyName: z.ZodOptional<z.ZodBoolean>;
    companyAddress: z.ZodOptional<z.ZodBoolean>;
    companyCity: z.ZodOptional<z.ZodBoolean>;
    companyZip: z.ZodOptional<z.ZodBoolean>;
    companyCountry: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=RazorpayConfigSelect.schema.d.ts.map