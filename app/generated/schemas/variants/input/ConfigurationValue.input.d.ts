import * as z from 'zod';
export declare const ConfigurationValueInputSchema: z.ZodObject<{
    id: z.ZodString;
    optionId: z.ZodString;
    option: z.ZodUnknown;
    label: z.ZodString;
    value: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    priceModifier: z.ZodNumber;
    metadata: z.ZodNullable<z.ZodOptional<z.ZodUnknown>>;
    sortOrder: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type ConfigurationValueInputType = z.infer<typeof ConfigurationValueInputSchema>;
//# sourceMappingURL=ConfigurationValue.input.d.ts.map