import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumPageStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPageStatusFieldUpdateOperationsInput>;
export declare const EnumPageStatusFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumPageStatusFieldUpdateOperationsInput.schema.d.ts.map