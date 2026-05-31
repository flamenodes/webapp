import * as z from 'zod';
export declare const ServerCreateResultSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodUnknown;
    orderItemId: z.ZodString;
    orderItem: z.ZodUnknown;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodNumber>;
    expiresAt: z.ZodOptional<z.ZodDate>;
    resources: z.ZodOptional<z.ZodUnknown>;
    pterodactylData: z.ZodOptional<z.ZodUnknown>;
    suspended: z.ZodBoolean;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=ServerCreateResult.schema.d.ts.map