import * as z from 'zod';
export declare const UserModelSchema: z.ZodObject<{
    id: z.ZodString;
    clientId: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodBoolean;
    image: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    sessions: z.ZodArray<z.ZodAny>;
    accounts: z.ZodArray<z.ZodAny>;
    role: z.ZodNullable<z.ZodString>;
    banned: z.ZodNullable<z.ZodBoolean>;
    banReason: z.ZodNullable<z.ZodString>;
    banExpires: z.ZodNullable<z.ZodString>;
    username: z.ZodString;
    firstname: z.ZodString;
    lastname: z.ZodString;
    servers: z.ZodArray<z.ZodAny>;
    cart: z.ZodNullable<z.ZodAny>;
    orders: z.ZodArray<z.ZodAny>;
    displayUsername: z.ZodNullable<z.ZodString>;
}, z.core.$strict>;
export type UserPureType = z.infer<typeof UserModelSchema>;
//# sourceMappingURL=User.pure.d.ts.map