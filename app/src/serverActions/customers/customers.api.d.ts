export declare const getCustomers: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const createCustomer: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    name: string;
    email: string;
    username: string;
    firstname: string;
    lastname: string;
    password: string;
    image?: string | null | undefined;
    displayUsername?: string | null | undefined;
}, Promise<{
    success: true;
    customer: any;
}>>;
export declare const updateCustomer: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    id: string;
    name?: string | undefined;
    email?: string | undefined;
    username?: string | undefined;
    firstname?: string | undefined;
    lastname?: string | undefined;
    image?: string | null | undefined;
    displayUsername?: string | null | undefined;
    banned?: boolean | undefined;
    banReason?: string | null | undefined;
}, Promise<{
    success: true;
    customer: any;
}>>;
export declare const deleteCustomer: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    id: string;
}, Promise<{
    success: true;
}>>;
export declare const deleteCustomers: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    ids: string[];
}, Promise<{
    success: true;
}>>;
export declare const generatePassword: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, {
    password: string;
}>;
//# sourceMappingURL=customers.api.d.ts.map