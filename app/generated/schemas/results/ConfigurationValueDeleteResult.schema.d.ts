import * as z from 'zod';
export declare const ConfigurationValueDeleteResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    optionId: z.ZodString;
    option: z.ZodUnknown;
    label: z.ZodString;
    value: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    priceModifier: z.ZodNumber;
    metadata: z.ZodOptional<z.ZodUnknown>;
    sortOrder: z.ZodNumber;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=ConfigurationValueDeleteResult.schema.d.ts.map