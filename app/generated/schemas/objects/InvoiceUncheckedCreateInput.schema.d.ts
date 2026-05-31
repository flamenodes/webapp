import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.InvoiceUncheckedCreateInput>;
export declare const InvoiceUncheckedCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    orderId: z.ZodString;
    invoiceNumber: z.ZodString;
    pdfUrl: z.ZodString;
    razorpayData: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        JsonNull: "JsonNull";
        DbNull: "DbNull";
    }>, z.ZodType<import("../../helpers/json-helpers").JsonValue, unknown, z.core.$ZodTypeInternals<import("../../helpers/json-helpers").JsonValue, unknown>>]>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceUncheckedCreateInput.schema.d.ts.map