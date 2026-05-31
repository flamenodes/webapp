import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const ConfigurationOptionCreateInputObjectSchema: z.ZodType<Prisma.ConfigurationOptionCreateInput>;
export declare const ConfigurationOptionCreateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    label: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    type: z.ZodOptional<z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>>;
    required: z.ZodOptional<z.ZodBoolean>;
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
    createdAt: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    values: z.ZodOptional<z.ZodLazy<z.ZodType<Prisma.ConfigurationValueCreateNestedManyWithoutOptionInput, unknown, z.core.$ZodTypeInternals<Prisma.ConfigurationValueCreateNestedManyWithoutOptionInput, unknown>>>>;
}, z.core.$strict>;
//# sourceMappingURL=ConfigurationOptionCreateInput.schema.d.ts.map