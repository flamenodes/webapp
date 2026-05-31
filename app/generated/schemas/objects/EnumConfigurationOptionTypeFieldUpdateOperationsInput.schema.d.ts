import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const EnumConfigurationOptionTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumConfigurationOptionTypeFieldUpdateOperationsInput>;
export declare const EnumConfigurationOptionTypeFieldUpdateOperationsInputObjectZodSchema: z.ZodObject<{
    set: z.ZodOptional<z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>>;
}, z.core.$strict>;
//# sourceMappingURL=EnumConfigurationOptionTypeFieldUpdateOperationsInput.schema.d.ts.map