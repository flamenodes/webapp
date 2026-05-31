import * as z from 'zod';
export declare const ProductScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    sortOrder: "sortOrder";
    price: "price";
    planName: "planName";
    icon: "icon";
    badge: "badge";
    category: "category";
    featureCategory: "featureCategory";
    inStock: "inStock";
    discountId: "discountId";
    specs: "specs";
    deployMode: "deployMode";
}>;
export type ProductScalarFieldEnum = z.infer<typeof ProductScalarFieldEnumSchema>;
//# sourceMappingURL=ProductScalarFieldEnum.schema.d.ts.map