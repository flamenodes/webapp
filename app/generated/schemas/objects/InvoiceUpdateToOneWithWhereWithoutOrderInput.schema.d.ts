import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceUpdateToOneWithWhereWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutOrderInput>;
export declare const InvoiceUpdateToOneWithWhereWithoutOrderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.InvoiceWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereInput, unknown>>>>;
    data: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUpdateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.InvoiceUncheckedUpdateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedUpdateWithoutOrderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceUpdateToOneWithWhereWithoutOrderInput.schema.d.ts.map