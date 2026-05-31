import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const ConfigurationValueWhereUniqueInputObjectSchema = makeSchema();
export const ConfigurationValueWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueWhereUniqueInput.schema.js.map