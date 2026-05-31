import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
export declare const EnumProductCategoryFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumProductCategoryFieldUpdateOperationsInput>;
export declare const EnumProductCategoryFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumProductCategoryFieldUpdateOperationsInput.schema.d.ts.map