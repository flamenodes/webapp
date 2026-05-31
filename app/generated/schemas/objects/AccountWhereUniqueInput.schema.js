import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const AccountWhereUniqueInputObjectSchema = makeSchema();
export const AccountWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountWhereUniqueInput.schema.js.map