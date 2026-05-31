import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ProductCategoryConfigWhereUniqueInputObjectSchema: z.ZodType<Prisma.ProductCategoryConfigWhereUniqueInput>;
export declare const ProductCategoryConfigWhereUniqueInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    category: z.ZodOptional<z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=ProductCategoryConfigWhereUniqueInput.schema.d.ts.map