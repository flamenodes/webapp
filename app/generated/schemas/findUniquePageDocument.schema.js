import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';
export const PageDocumentFindUniqueSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), where: PageDocumentWhereUniqueInputObjectSchema }).strict();
export const PageDocumentFindUniqueZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), where: PageDocumentWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniquePageDocument.schema.js.map