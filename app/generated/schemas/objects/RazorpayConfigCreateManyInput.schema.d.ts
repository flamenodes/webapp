import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const RazorpayConfigCreateManyInputObjectSchema: z.ZodType<Prisma.RazorpayConfigCreateManyInput>;
export declare const RazorpayConfigCreateManyInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    mode: z.ZodOptional<z.ZodString>;
    testKeyId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    testKeySecret: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prodKeyId: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    prodKeySecret: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    gstin: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyAddress: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyCity: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyZip: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    companyCountry: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    updatedAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=RazorpayConfigCreateManyInput.schema.d.ts.map