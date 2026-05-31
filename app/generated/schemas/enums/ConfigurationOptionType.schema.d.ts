import * as z from 'zod';
export declare const ConfigurationOptionTypeSchema: z.ZodEnum<{
    SELECT: "SELECT";
    RADIO: "RADIO";
    TEXT: "TEXT";
    NUMBER: "NUMBER";
}>;
export type ConfigurationOptionType = z.infer<typeof ConfigurationOptionTypeSchema>;
//# sourceMappingURL=ConfigurationOptionType.schema.d.ts.map