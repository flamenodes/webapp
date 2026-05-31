import * as z from 'zod';
export declare const ServerFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    user: z.ZodAny;
    orderItemId: z.ZodString;
    orderItem: z.ZodAny;
    name: z.ZodString;
    type: z.ZodString;
    status: z.ZodString;
    ip: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodNumber>;
    expiresAt: z.ZodOptional<z.ZodString>;
    resources: z.ZodOptional<z.ZodAny>;
    pterodactylData: z.ZodOptional<z.ZodAny>;
    suspended: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, z.core.$strip>>;
//# sourceMappingURL=ServerFindFirstResult.schema.d.ts.map