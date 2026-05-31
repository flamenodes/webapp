import * as z from 'zod';
export declare const ConfigurationValueModelSchema: z.ZodObject<{
    id: z.ZodString;
    optionId: z.ZodString;
    option: z.ZodUnknown;
    label: z.ZodString;
    value: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    priceModifier: z.ZodNumber;
    metadata: z.ZodNullable<z.ZodUnknown>;
    sortOrder: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type ConfigurationValuePureType = z.infer<typeof ConfigurationValueModelSchema>;
//# sourceMappingURL=ConfigurationValue.pure.d.ts.map