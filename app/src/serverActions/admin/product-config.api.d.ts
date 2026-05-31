export declare const getProducts: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: boolean;
    message: string;
    data: any;
}>>;
export declare const updateProductConfig: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    productId: string;
    config: {
        options: {
            id: string;
            label: string;
            value: string;
            description?: string | undefined;
        }[];
        ptero?: {
            nest?: number | undefined;
            egg?: number | undefined;
            cpu?: number | undefined;
            memory?: number | undefined;
            swap?: number | undefined;
            disk?: number | undefined;
            database?: number | undefined;
            allocation?: number | undefined;
            backups?: number | undefined;
        } | undefined;
    };
}, Promise<{
    success: boolean;
    message: string;
}>>;
export declare const getProductConfig: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    productId: string;
}, Promise<{
    success: boolean;
    message: string;
}>>;
//# sourceMappingURL=product-config.api.d.ts.map