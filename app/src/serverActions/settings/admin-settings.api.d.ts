export declare const getRazorpayConfig: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: boolean;
    message: string;
    data: any;
}>>;
export declare const updateRazorpayConfig: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    mode: "production" | "test";
    testKeyId?: string | undefined;
    testKeySecret?: string | undefined;
    prodKeyId?: string | undefined;
    prodKeySecret?: string | undefined;
    gstin?: string | undefined;
    companyName?: string | undefined;
    companyAddress?: string | undefined;
    companyCity?: string | undefined;
    companyZip?: string | undefined;
    companyCountry?: string | undefined;
    pteroNodeMode?: "balance" | "specific" | undefined;
    pteroNodeId?: number | null | undefined;
}, Promise<{
    success: boolean;
    message: string;
    data: any;
}>>;
export declare const getPteroNodeSettings: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    nodeMode: "balance" | "specific";
    nodeId: any;
}>>;
export declare const getActiveRazorpayKeys: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    keyId: string;
    keySecret: string;
    mode: "test";
    gstin: null;
    companyName?: undefined;
    companyAddress?: undefined;
    companyCity?: undefined;
    companyZip?: undefined;
    companyCountry?: undefined;
} | {
    keyId: any;
    keySecret: any;
    mode: any;
    gstin: any;
    companyName: any;
    companyAddress: any;
    companyCity: any;
    companyZip: any;
    companyCountry: any;
}>>;
//# sourceMappingURL=admin-settings.api.d.ts.map