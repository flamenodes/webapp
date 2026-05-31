import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const UserSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput>;
export declare const UserSumOrderByAggregateInputObjectZodSchema: z.ZodObject<{
    pteroUserId: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=UserSumOrderByAggregateInput.schema.d.ts.map