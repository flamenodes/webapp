import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentCreateManyInputObjectSchema as PageDocumentCreateManyInputObjectSchema } from './objects/PageDocumentCreateManyInput.schema';
export const PageDocumentCreateManyAndReturnSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: z.union([PageDocumentCreateManyInputObjectSchema, z.array(PageDocumentCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const PageDocumentCreateManyAndReturnZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: z.union([PageDocumentCreateManyInputObjectSchema, z.array(PageDocumentCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnPageDocument.schema.js.map