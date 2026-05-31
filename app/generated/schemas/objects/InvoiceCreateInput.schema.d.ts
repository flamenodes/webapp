import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceCreateInputObjectSchema: z.ZodType<Prisma.InvoiceCreateInput>;
export declare const InvoiceCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    order: z.ZodLazy<z.ZodType<Prisma.OrderCreateNestedOneWithoutInvoiceInput, unknown, z.core.$ZodTypeInternals<Prisma.OrderCreateNestedOneWithoutInvoiceInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceCreateInput.schema.d.ts.map