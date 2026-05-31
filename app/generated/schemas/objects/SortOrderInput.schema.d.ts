import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const SortOrderInputObjectSchema: z.ZodType<Prisma.SortOrderInput>;
export declare const SortOrderInputObjectZodSchema: z.ZodObject<{
    sort: z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>;
    nulls: z.ZodOptional<z.ZodEnum<{
        first: "first";
        last: "last";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=SortOrderInput.schema.d.ts.map