import * as z from 'zod';
export declare const StatusNodeInputSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    ip: z.ZodString;
    location: z.ZodString;
    type: z.ZodString;
    port: z.ZodNumber;
    protocol: z.ZodString;
    status: z.ZodString;
    latency: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    lastChecked: z.ZodNullable<z.ZodOptional<z.ZodDate>>;
    cpu: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    memory: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    disk: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type StatusNodeInputType = z.infer<typeof StatusNodeInputSchema>;
//# sourceMappingURL=StatusNode.input.d.ts.map