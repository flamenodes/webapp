import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const ConfigurationOptionWhereUniqueInputObjectSchema = makeSchema();
export const ConfigurationOptionWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionWhereUniqueInput.schema.js.map