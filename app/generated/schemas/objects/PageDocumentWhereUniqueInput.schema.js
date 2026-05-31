import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    slug: z.string().optional()
}).strict();
export const PageDocumentWhereUniqueInputObjectSchema = makeSchema();
export const PageDocumentWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=PageDocumentWhereUniqueInput.schema.js.map