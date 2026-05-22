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
    features: z.array(z.unknown()),
    featureCategory: z.string(),
    inStock: z.boolean(),
    discountId: z.string().optional().nullable(),
    discount: z.unknown().optional().nullable(),
    specs: z.unknown(),
    deployMode: z.string(),
    cartItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProductInputType = z.infer<typeof ProductInputSchema>;
