import * as z from 'zod';
export declare const ConfigurationOptionFindFirstResultSchema: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    label: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    type: z.ZodUnknown;
    required: z.ZodBoolean;
    category: z.ZodUnknown;
    sortOrder: z.ZodNumber;
    values: z.ZodArray<z.ZodUnknown>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>>;
//# sourceMappingURL=ConfigurationOptionFindFirstResult.schema.d.ts.map