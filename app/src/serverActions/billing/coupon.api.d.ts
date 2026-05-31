import { z } from "zod";
export declare const createCoupon: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    code: z.ZodString;
    type: z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>;
    amount: z.ZodNumber;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    active: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>, Promise<any>>;
export declare const getCoupons: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
export declare const getCoupon: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<any>>;
export declare const validateCoupon: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    code: z.ZodString;
}, z.core.$strip>, Promise<any>>;
export declare const updateCoupon: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
    code: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodEnum<{
        FIXED: "FIXED";
        PERCENT: "PERCENT";
    }>>;
    amount: z.ZodOptional<z.ZodNumber>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    active: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strip>, Promise<any>>;
export declare const deleteCoupon: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<any>>;
//# sourceMappingURL=coupon.api.d.ts.map