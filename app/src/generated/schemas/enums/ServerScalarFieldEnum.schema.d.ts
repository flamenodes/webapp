import * as z from 'zod';
export declare const ServerScalarFieldEnumSchema: z.ZodEnum<{
    type: "type";
    id: "id";
    name: "name";
    createdAt: "createdAt";
    userId: "userId";
    status: "status";
    updatedAt: "updatedAt";
    expiresAt: "expiresAt";
    orderItemId: "orderItemId";
    ip: "ip";
    port: "port";
    resources: "resources";
    pterodactylData: "pterodactylData";
    suspended: "suspended";
}>;
export type ServerScalarFieldEnum = z.infer<typeof ServerScalarFieldEnumSchema>;
//# sourceMappingURL=ServerScalarFieldEnum.schema.d.ts.map