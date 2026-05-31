import type React from 'react';
declare const PRODUCT_CATEGORIES: readonly [{
    readonly value: "VPS";
    readonly label: "VPS";
}, {
    readonly value: "VDS";
    readonly label: "VDS";
}, {
    readonly value: "WEBHOST";
    readonly label: "Web Hosting";
}, {
    readonly value: "DISCORD";
    readonly label: "Discord";
}, {
    readonly value: "DDOS_PROT";
    readonly label: "DDoS Protection";
}, {
    readonly value: "DEDICATED";
    readonly label: "Dedicated";
}, {
    readonly value: "MINECRAFT";
    readonly label: "Minecraft";
}];
type ProductCategory = (typeof PRODUCT_CATEGORIES)[number]['value'];
type EditableProduct = {
    id: string;
    planName: string;
    icon: string | null;
    badge: string | null;
    category: ProductCategory;
    price: number;
    inStock: boolean;
    deployMode: string;
    features: string[];
    specEntries: Array<{
        key: string;
        value: string;
    }>;
};
declare const CreateProductModal: ({ children, product, }: {
    children: React.ReactNode;
    product?: EditableProduct;
}) => React.JSX.Element;
export default CreateProductModal;
//# sourceMappingURL=CreateProductModal.d.ts.map