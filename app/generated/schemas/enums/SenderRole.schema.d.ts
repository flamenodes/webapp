import * as z from 'zod';
export declare const SenderRoleSchema: z.ZodEnum<{
    USER: "USER";
    SUPPORT: "SUPPORT";
    ADMIN: "ADMIN";
}>;
export type SenderRole = z.infer<typeof SenderRoleSchema>;
//# sourceMappingURL=SenderRole.schema.d.ts.map