export declare const getUserProfile: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: boolean;
    message: string;
    data: any;
}>>;
export declare const updateUserProfile: import("@tanstack/react-start").OptionalFetcher<undefined, (data: unknown) => {
    firstname?: string | undefined;
    lastname?: string | undefined;
    address?: string | undefined;
    city?: string | undefined;
    zip?: string | undefined;
    country?: string | undefined;
}, Promise<{
    success: boolean;
    message: string;
}>>;
//# sourceMappingURL=user-settings.api.d.ts.map