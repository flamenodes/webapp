interface ProductCardProps {
    product: {
        name: string;
        category: string;
        pricing: {
            current: {
                monthly: number;
                currency: string;
            };
            original: {
                monthly: number;
                currency: string;
            };
            totalSavings: number;
            period: string;
            totalPrice: number;
        };
        renewal: {
            monthly: number;
            duration: string;
            currency: string;
        };
        features: {
            freeDomain: boolean;
            domainDuration: string;
        };
    };
}
export declare function ProductCard({ product }: ProductCardProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=ProductCard.d.ts.map