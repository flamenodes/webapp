import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    orderItemId: z.string().optional()
}).strict();
export const ServerWhereUniqueInputObjectSchema = makeSchema();
export const ServerWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerWhereUniqueInput.schema.js.map