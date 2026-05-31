import z from 'zod';
export declare const createPteroUser: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    email: z.ZodEmail;
    username: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    password: z.ZodString;
    language: z.ZodString;
    rootAdmin: z.ZodBoolean;
}, z.core.$strip>, Promise<{
    success: true;
    message: "User created successfully.";
    data: any;
} | {
    success: false;
    message: "User creation failed.";
    data?: undefined;
}>>;
export declare const updatePteroUser: import("@tanstack/react-start").RequiredFetcher<undefined, z.ZodObject<{
    id: z.ZodNumber;
    email: z.ZodEmail;
    username: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    password: z.ZodString;
    rootAdmin: z.ZodBoolean;
}, z.core.$strip>, Promise<{
    success: true;
    message: "User updated successfully.";
    data: any;
} | {
    success: false;
    message: "User updating failed.";
    data?: undefined;
}>>;
//# sourceMappingURL=users.d.ts.map