import * as z from 'zod';
export declare const ConfigurationOptionInputSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    label: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    type: z.ZodEnum<{
        SELECT: "SELECT";
        RADIO: "RADIO";
        TEXT: "TEXT";
        NUMBER: "NUMBER";
    }>;
    required: z.ZodBoolean;
    category: z.ZodEnum<{
        VPS: "VPS";
        VDS: "VDS";
        WEBHOST: "WEBHOST";
        DISCORD: "DISCORD";
        DDOS_PROT: "DDOS_PROT";
        DEDICATED: "DEDICATED";
        MINECRAFT: "MINECRAFT";
    }>;
    sortOrder: z.ZodNumber;
    values: z.ZodArray<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type ConfigurationOptionInputType = z.infer<typeof ConfigurationOptionInputSchema>;
//# sourceMappingURL=ConfigurationOption.input.d.ts.map