import type { Prisma } from '../../src/generated/prisma/client';
import * as z from 'zod';
export declare const DiscountUpdateManyAndReturnSchema: z.ZodType<Prisma.DiscountUpdateManyAndReturnArgs>;
export declare const DiscountUpdateManyAndReturnZodSchema: z.ZodObject<{
    select: z.ZodOptional<z.ZodType<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown, z.core.$ZodTypeInternals<Prisma.DiscountSelect<import("@prisma/client/runtime/client").DefaultArgs>, unknown>>>;
    data: z.ZodType<Prisma.DiscountUpdateManyMutationInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountUpdateManyMutationInput, unknown>>;
    where: z.ZodOptional<z.ZodType<Prisma.DiscountWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.DiscountWhereInput, unknown>>>;
}, z.core.$strict>;
//# sourceMappingURL=updateManyAndReturnDiscount.schema.d.ts.map