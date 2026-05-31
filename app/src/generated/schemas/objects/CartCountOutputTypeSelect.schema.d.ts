import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const CartCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CartCountOutputTypeSelect>;
export declare const CartCountOutputTypeSelectObjectZodSchema: z.ZodObject<{
    items: z.ZodOptional<z.ZodUnion<readonly [z.ZodBoolean, z.ZodLazy<z.ZodObject<{
        where: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.CartItemWhereInput, unknown, z.core.$ZodTypeInternals<Prisma.CartItemWhereInput, unknown>>>>;
    }, z.core.$strict>>]>>;
}, z.core.$strict>;
//# sourceMappingURL=CartCountOutputTypeSelect.schema.d.ts.map