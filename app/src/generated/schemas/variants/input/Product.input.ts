import * as z from 'zod';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.string(),
    deployMode: z.string(),
    specs: z.any(),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    category: ProductCategorySchema,
    icon: z.string().optional().nullable(),
    inStock: z.boolean(),
    planName: z.string(),
    price: z.number().int(),
    discountId: z.string().optional().nullable(),
    featureCategory: z.string(),
    badge: z.string().optional().nullable(),
    sortOrder: z.number().int(),
    cartItems: z.array(z.any()),
    orderItems: z.array(z.any()),
    discount: z.any().optional().nullable(),
    billingOptions: z.array(z.any()),
    features: z.array(z.any())
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
