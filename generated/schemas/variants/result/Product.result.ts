import * as z from 'zod';
import { ProductCategorySchema } from '../../enums/ProductCategory.schema';
// prettier-ignore
export const ProductResultSchema = z.object({
    id: z.string(),
    planName: z.string(),
    icon: z.string().nullable(),
    badge: z.string().nullable(),
    category: ProductCategorySchema,
    price: z.number().int(),
    sortOrder: z.number().int(),
    features: z.array(z.unknown()),
    featureCategory: z.string(),
    inStock: z.boolean(),
    discountId: z.string().nullable(),
    discount: z.unknown().nullable(),
    specs: z.unknown(),
    deployMode: z.string(),
    cartItems: z.array(z.unknown()),
    orderItems: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ProductResultType = z.infer<typeof ProductResultSchema>;
