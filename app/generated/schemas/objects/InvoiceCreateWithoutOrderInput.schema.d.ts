import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceCreateWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceCreateWithoutOrderInput>;
export declare const InvoiceCreateWithoutOrderInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceCreateWithoutOrderInput.schema.d.ts.map