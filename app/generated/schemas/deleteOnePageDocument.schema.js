import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';
export const PageDocumentDeleteOneSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), where: PageDocumentWhereUniqueInputObjectSchema }).strict();
export const PageDocumentDeleteOneZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), where: PageDocumentWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOnePageDocument.schema.js.map