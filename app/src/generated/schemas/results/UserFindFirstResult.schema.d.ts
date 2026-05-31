import * as z from 'zod';
export declare const UserFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    clientId: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodBoolean;
    image: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    sessions: z.ZodArray<z.ZodAny>;
    accounts: z.ZodArray<z.ZodAny>;
    role: z.ZodOptional<z.ZodString>;
    banned: z.ZodOptional<z.ZodBoolean>;
    banReason: z.ZodOptional<z.ZodString>;
    banExpires: z.ZodOptional<z.ZodString>;
    username: z.ZodString;
    firstname: z.ZodString;
    lastname: z.ZodString;
    servers: z.ZodArray<z.ZodAny>;
    cart: z.ZodOptional<z.ZodAny>;
    orders: z.ZodArray<z.ZodAny>;
    displayUsername: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>;
//# sourceMappingURL=UserFindFirstResult.schema.d.ts.map