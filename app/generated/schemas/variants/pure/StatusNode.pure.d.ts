import * as z from 'zod';
export declare const StatusNodeModelSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    ip: z.ZodString;
    location: z.ZodString;
    type: z.ZodString;
    port: z.ZodNumber;
    protocol: z.ZodString;
    status: z.ZodString;
    latency: z.ZodNullable<z.ZodNumber>;
    lastChecked: z.ZodNullable<z.ZodDate>;
    cpu: z.ZodNullable<z.ZodNumber>;
    memory: z.ZodNullable<z.ZodNumber>;
    disk: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type StatusNodePureType = z.infer<typeof StatusNodeModelSchema>;
//# sourceMappingURL=StatusNode.pure.d.ts.map