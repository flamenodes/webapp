import * as z from 'zod';
export declare const ConfigurationOptionScalarFieldEnumSchema: z.ZodEnum<{
    type: "type";
    id: "id";
    description: "description";
    name: "name";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    label: "label";
    sortOrder: "sortOrder";
    category: "category";
    required: "required";
}>;
export type ConfigurationOptionScalarFieldEnum = z.infer<typeof ConfigurationOptionScalarFieldEnumSchema>;
//# sourceMappingURL=ConfigurationOptionScalarFieldEnum.schema.d.ts.map