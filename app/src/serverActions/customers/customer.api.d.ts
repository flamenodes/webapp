import { z } from 'zod';
export declare const createCustomer: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    clientId: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    username: z.ZodString;
    firstname: z.ZodString;
    lastname: z.ZodString;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    banned: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    banReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    banExpires: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayUsername: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, Promise<any>>;
export declare const updateCustomer: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
    clientId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    username: z.ZodOptional<z.ZodString>;
    firstname: z.ZodOptional<z.ZodString>;
    lastname: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    banned: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    banReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    banExpires: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    displayUsername: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>, Promise<any>>;
export declare const deleteCustomer: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>, Promise<any>>;
//# sourceMappingURL=customer.api.d.ts.map