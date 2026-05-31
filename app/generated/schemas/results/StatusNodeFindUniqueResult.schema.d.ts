import * as z from 'zod';
export declare const StatusNodeFindUniqueResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    ip: z.ZodString;
    location: z.ZodString;
    type: z.ZodString;
    port: z.ZodNumber;
    protocol: z.ZodString;
    status: z.ZodString;
    latency: z.ZodOptional<z.ZodNumber>;
    lastChecked: z.ZodOptional<z.ZodDate>;
    cpu: z.ZodOptional<z.ZodNumber>;
    memory: z.ZodOptional<z.ZodNumber>;
    disk: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=StatusNodeFindUniqueResult.schema.d.ts.map