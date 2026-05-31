import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const ServerSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ServerSumOrderByAggregateInput>;
export declare const ServerSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    port: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ServerSumOrderByAggregateInput.schema.d.ts.map