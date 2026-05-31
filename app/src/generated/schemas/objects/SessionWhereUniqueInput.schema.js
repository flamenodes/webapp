import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    token: z.string().optional()
}).strict();
export const SessionWhereUniqueInputObjectSchema = makeSchema();
export const SessionWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionWhereUniqueInput.schema.js.map