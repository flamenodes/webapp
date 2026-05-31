import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StatusNodeCreateInputObjectSchema: z.ZodType<Prisma.StatusNodeCreateInput>;
export declare const StatusNodeCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    ip: z.ZodString;
    location: z.ZodString;
    type: z.ZodOptional<z.ZodString>;
    port: z.ZodOptional<z.ZodNumber>;
    protocol: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    latency: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    lastChecked: z.ZodNullable<z.ZodOptional<z.ZodCoercedDate<unknown>>>;
    cpu: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    memory: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    disk: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strict>;
//# sourceMappingURL=StatusNodeCreateInput.schema.d.ts.map