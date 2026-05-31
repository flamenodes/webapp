import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    clientId: z.string().optional(),
    email: z.string().optional(),
    username: z.string().optional()
}).strict();
export const UserWhereUniqueInputObjectSchema = makeSchema();
export const UserWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserWhereUniqueInput.schema.js.map