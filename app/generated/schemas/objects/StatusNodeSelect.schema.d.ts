import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StatusNodeSelectObjectSchema: z.ZodType<Prisma.StatusNodeSelect>;
export declare const StatusNodeSelectObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodBoolean>;
    ip: z.ZodOptional<z.ZodBoolean>;
    location: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodOptional<z.ZodBoolean>;
    port: z.ZodOptional<z.ZodBoolean>;
    protocol: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodOptional<z.ZodBoolean>;
    latency: z.ZodOptional<z.ZodBoolean>;
    lastChecked: z.ZodOptional<z.ZodBoolean>;
    cpu: z.ZodOptional<z.ZodBoolean>;
    memory: z.ZodOptional<z.ZodBoolean>;
    disk: z.ZodOptional<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodBoolean>;
    updatedAt: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=StatusNodeSelect.schema.d.ts.map