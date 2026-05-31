import * as z from 'zod';
export declare const UserInputSchema: z.ZodObject<{
    id: z.ZodString;
    clientId: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodBoolean;
    image: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    sessions: z.ZodArray<z.ZodAny>;
    accounts: z.ZodArray<z.ZodAny>;
    role: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    banned: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
    banReason: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    banExpires: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    username: z.ZodString;
    firstname: z.ZodString;
    lastname: z.ZodString;
    servers: z.ZodArray<z.ZodAny>;
    cart: z.ZodNullable<z.ZodOptional<z.ZodAny>>;
    orders: z.ZodArray<z.ZodAny>;
    displayUsername: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strict>;
export type UserInputType = z.infer<typeof UserInputSchema>;
//# sourceMappingURL=User.input.d.ts.map