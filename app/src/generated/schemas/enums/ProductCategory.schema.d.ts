import * as z from 'zod';
export declare const ProductCategorySchema: z.ZodEnum<{
    VPS: "VPS";
    VDS: "VDS";
    WEBHOST: "WEBHOST";
    DISCORD: "DISCORD";
    DDOS_PROT: "DDOS_PROT";
    DEDICATED: "DEDICATED";
    MINECRAFT: "MINECRAFT";
}>;
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
//# sourceMappingURL=ProductCategory.schema.d.ts.map