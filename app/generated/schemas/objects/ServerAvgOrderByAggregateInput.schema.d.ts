import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ServerAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerAvgOrderByAggregateInput>;
export declare const ServerAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    port: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerAvgOrderByAggregateInput.schema.d.ts.map