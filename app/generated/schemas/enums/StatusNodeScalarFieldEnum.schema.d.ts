import * as z from 'zod';
export declare const StatusNodeScalarFieldEnumSchema: z.ZodEnum<{
    type: "type";
    id: "id";
    name: "name";
    createdAt: "createdAt";
    status: "status";
    updatedAt: "updatedAt";
    ip: "ip";
    port: "port";
    location: "location";
    protocol: "protocol";
    latency: "latency";
    lastChecked: "lastChecked";
    cpu: "cpu";
    memory: "memory";
    disk: "disk";
}>;
export type StatusNodeScalarFieldEnum = z.infer<typeof StatusNodeScalarFieldEnumSchema>;
//# sourceMappingURL=StatusNodeScalarFieldEnum.schema.d.ts.map