import * as z from 'zod';
export declare const UserSchema: z.ZodObject<{
    id: z.ZodString;
    clientId: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodBoolean;
    image: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    role: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    banned: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    banReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    banExpires: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    username: z.ZodString;
    firstname: z.ZodString;
    lastname: z.ZodString;
    displayUsername: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type UserType = z.infer<typeof UserSchema>;
//# sourceMappingURL=User.schema.d.ts.map