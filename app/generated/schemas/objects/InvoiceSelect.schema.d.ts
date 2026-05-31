import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceSelectObjectSchema: z.ZodType<Prisma.InvoiceSelect>;
export declare const InvoiceSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    orderId: z.ZodOptional<z.ZodBoolean>;
    order: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        select: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
        include: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.OrderInclude<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>>;
    }, z.core.$strict>>]>>;
    invoiceNumber: z.ZodOptional<z.ZodBoolean>;
    pdfUrl: z.ZodOptional<z.ZodBoolean>;
    razorpayData: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceSelect.schema.d.ts.map