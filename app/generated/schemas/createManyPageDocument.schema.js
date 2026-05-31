import * as z from 'zod';
import { PageDocumentCreateManyInputObjectSchema as PageDocumentCreateManyInputObjectSchema } from './objects/PageDocumentCreateManyInput.schema';
export const PageDocumentCreateManySchema = z.object({ data: z.union([PageDocumentCreateManyInputObjectSchema, z.array(PageDocumentCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const PageDocumentCreateManyZodSchema = z.object({ data: z.union([PageDocumentCreateManyInputObjectSchema, z.array(PageDocumentCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyPageDocument.schema.js.map