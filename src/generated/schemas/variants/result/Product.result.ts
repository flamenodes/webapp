import * as z from 'zod';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
// prettier-ignore
export const ProductResultSchema = z.object({
    id: z.string(),
    planName: z.string(),
    icon: z.string().nullable(),
    imageUrl: z.string().nullable(),
    category: ProductCategorySchema,
    price: z.number().int(),
    features: z.array(z.string()),
    featureCategory: z.string(),
    inStock: z.boolean(),
    discount: z.any().nullable(),
    discountId: z.string().nullable(),
    specs: z.any(),
    deployMode: z.string(),
    cartItems: z.array(z.any()),
    orderItems: z.array(z.any()),
    createdAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime"),
    updatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, "Invalid ISO datetime")
}).strict();

export type ProductResultType = z.infer<typeof ProductResultSchema>;
