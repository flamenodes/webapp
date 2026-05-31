import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput>;
export declare const UserAvgOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    pteroUserId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=UserAvgOrderByAggregateInput.schema.d.ts.map