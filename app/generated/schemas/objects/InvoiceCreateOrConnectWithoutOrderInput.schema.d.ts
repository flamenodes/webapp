import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const InvoiceCreateOrConnectWithoutOrderInputObjectSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutOrderInput>;
export declare const InvoiceCreateOrConnectWithoutOrderInputObjectZodSchema: z.ZodObject<{
    where: z.ZodLazy<z.ZodType<Prisma.InvoiceWhereUniqueInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceWhereUniqueInput, unknown>>>;
    create: z.ZodUnion<readonly [z.ZodLazy<z.ZodType<Prisma.InvoiceCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceCreateWithoutOrderInput, unknown>>>, z.ZodLazy<z.ZodType<Prisma.InvoiceUncheckedCreateWithoutOrderInput, unknown, z.core.$ZodTypeInternals<Prisma.InvoiceUncheckedCreateWithoutOrderInput, unknown>>>]>;
}, z.core.$strict>;
//# sourceMappingURL=InvoiceCreateOrConnectWithoutOrderInput.schema.d.ts.map