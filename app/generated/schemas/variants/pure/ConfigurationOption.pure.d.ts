import * as z from 'zod';
export declare const ConfigurationOptionModelSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    label: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
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
export type ConfigurationOptionPureType = z.infer<typeof ConfigurationOptionModelSchema>;
//# sourceMappingURL=ConfigurationOption.pure.d.ts.map