import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const DiscountCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.DiscountCountOutputTypeSelect>;
export declare const DiscountCountOutputTypeSelectObjectZodSchema: z.ZodObject<{
    product: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ProductWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.ProductWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=DiscountCountOutputTypeSelect.schema.d.ts.map