export declare const getConfigurationOptions: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    category: "VPS" | "VDS" | "WEBHOST" | "DISCORD" | "DDOS_PROT" | "DEDICATED" | "MINECRAFT";
}, Promise<any>>;
export declare const getAllConfigurationOptions: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const createConfigurationOption: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    name: string;
    label: string;
    type: "SELECT" | "RADIO" | "TEXT" | "NUMBER";
    required: boolean;
    category: "VPS" | "VDS" | "WEBHOST" | "DISCORD" | "DDOS_PROT" | "DEDICATED" | "MINECRAFT";
    sortOrder: number;
    description?: string | undefined;
}, Promise<{
    success: true;
    message: string;
    data: any;
}>>;
export declare const updateConfigurationOption: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    name: string;
    label: string;
    type: "SELECT" | "RADIO" | "TEXT" | "NUMBER";
    required: boolean;
    category: "VPS" | "VDS" | "WEBHOST" | "DISCORD" | "DDOS_PROT" | "DEDICATED" | "MINECRAFT";
    sortOrder: number;
    id: string;
    description?: string | undefined;
}, Promise<{
    success: true;
    message: string;
    data: any;
}>>;
export declare const deleteConfigurationOption: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    id: string;
}, Promise<{
    success: true;
    message: string;
}>>;
export declare const createConfigurationValue: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    optionId: string;
    label: string;
    value: string;
    priceModifier: number;
    sortOrder: number;
    description?: string | undefined;
    metadata?: Record<any, unknown> | undefined;
}, Promise<{
    success: true;
    message: string;
    data: ConfigurationValue;
}>>;
export declare const updateConfigurationValue: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    optionId: string;
    label: string;
    value: string;
    priceModifier: number;
    sortOrder: number;
    id: string;
    description?: string | undefined;
    metadata?: Record<any, unknown> | undefined;
}, Promise<{
    success: true;
    message: string;
    data: ConfigurationValue;
}>>;
export declare const deleteConfigurationValue: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    id: string;
}, Promise<{
    success: true;
    message: string;
}>>;
//# sourceMappingURL=configuration.api.d.ts.map