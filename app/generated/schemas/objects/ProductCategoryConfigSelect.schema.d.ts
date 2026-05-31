import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigSelectObjectSchema: z.ZodType<Prisma.ProductCategoryConfigSelect>;
export declare const ProductCategoryConfigSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    category: z.ZodOptional<z.ZodBoolean>;
    billingPeriods: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigSelect.schema.d.ts.map