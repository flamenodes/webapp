import * as z from 'zod';
export declare const ConfigurationValueScalarFieldEnumSchema: z.ZodEnum<{
    value: "value";
    metadata: "metadata";
    id: "id";
    description: "description";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    label: "label";
    sortOrder: "sortOrder";
    optionId: "optionId";
    priceModifier: "priceModifier";
}>;
export type ConfigurationValueScalarFieldEnum = z.infer<typeof ConfigurationValueScalarFieldEnumSchema>;
//# sourceMappingURL=ConfigurationValueScalarFieldEnum.schema.d.ts.map