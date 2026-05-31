import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const StatusNodeWhereUniqueInputObjectSchema = makeSchema();
export const StatusNodeWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeWhereUniqueInput.schema.js.map