import * as z from 'zod';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
// prettier-ignore
export const ProductInputSchema = z.object({
    id: z.string(),
    planName: z.string(),
    icon: z.string().optional().nullable(),
    badge: z.string().optional().nullable(),
    category: ProductCategorySchema,
    price: z.number().int(),
    sortOrder: z.number().int(),
    features: z.array(z.any()),
    featureCategory: z.string(),
    inStock: z.boolean(),
    discountId: z.string().optional().nullable(),
    discount: z.any().optional().nullable(),
    specs: z.any(),
    deployMode: z.string(),
    cartItems: z.array(z.any()),
    orderItems: z.array(z.any()),
    billingOptions: z.array(z.any()),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
