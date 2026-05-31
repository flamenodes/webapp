import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentCreateInputObjectSchema as PageDocumentCreateInputObjectSchema } from './objects/PageDocumentCreateInput.schema';
import { PageDocumentUncheckedCreateInputObjectSchema as PageDocumentUncheckedCreateInputObjectSchema } from './objects/PageDocumentUncheckedCreateInput.schema';
export const PageDocumentCreateOneSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: z.union([PageDocumentCreateInputObjectSchema, PageDocumentUncheckedCreateInputObjectSchema]) }).strict();
export const PageDocumentCreateOneZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: z.union([PageDocumentCreateInputObjectSchema, PageDocumentUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOnePageDocument.schema.js.map