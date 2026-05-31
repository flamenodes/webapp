import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const AccountOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput>;
export declare const AccountOrderByRelationAggregateInputObjectZodSchema: z.ZodObject<{
    _count: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=AccountOrderByRelationAggregateInput.schema.d.ts.map