import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentUpdateInputObjectSchema as PageDocumentUpdateInputObjectSchema } from './objects/PageDocumentUpdateInput.schema';
import { PageDocumentUncheckedUpdateInputObjectSchema as PageDocumentUncheckedUpdateInputObjectSchema } from './objects/PageDocumentUncheckedUpdateInput.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';
export const PageDocumentUpdateOneSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: z.union([PageDocumentUpdateInputObjectSchema, PageDocumentUncheckedUpdateInputObjectSchema]), where: PageDocumentWhereUniqueInputObjectSchema }).strict();
export const PageDocumentUpdateOneZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: z.union([PageDocumentUpdateInputObjectSchema, PageDocumentUncheckedUpdateInputObjectSchema]), where: PageDocumentWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOnePageDocument.schema.js.map