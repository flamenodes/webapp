import { z } from 'zod';
export declare const getMyBillingInfo: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: true;
    data: any;
}>>;
export declare const updateMyBillingInfo: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    firstname: z.ZodString;
    lastname: z.ZodString;
    address: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    zip: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
}, z.core.$strip>, Promise<{
    success: true;
    data: any;
    message: "Billing information updated successfully";
}>>;
export declare const getAllBillingInfo: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<{
    success: true;
    data: any;
}>>;
export declare const getUserBillingInfo: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>, Promise<{
    success: true;
    data: any;
}>>;
export declare const updateUserBillingInfo: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    userId: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        firstname: z.ZodString;
        lastname: z.ZodString;
        address: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        zip: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strip>, Promise<{
    success: true;
    data: any;
    message: "User billing information updated successfully";
}>>;
export declare const deleteUserBillingInfo: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    userId: z.ZodString;
}, z.core.$strip>, Promise<{
    success: true;
    message: "Billing information cleared successfully";
}>>;
//# sourceMappingURL=billing.api.d.ts.map