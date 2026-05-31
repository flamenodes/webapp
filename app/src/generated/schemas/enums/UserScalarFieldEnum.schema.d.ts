import * as z from 'zod';
export declare const UserScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    name: "name";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    clientId: "clientId";
    email: "email";
    emailVerified: "emailVerified";
    image: "image";
    role: "role";
    banned: "banned";
    banReason: "banReason";
    banExpires: "banExpires";
    username: "username";
    firstname: "firstname";
    lastname: "lastname";
    displayUsername: "displayUsername";
}>;
export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;
//# sourceMappingURL=UserScalarFieldEnum.schema.d.ts.map