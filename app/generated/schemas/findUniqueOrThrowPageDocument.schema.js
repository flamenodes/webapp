import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';
export const PageDocumentFindUniqueOrThrowSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), where: PageDocumentWhereUniqueInputObjectSchema }).strict();
export const PageDocumentFindUniqueOrThrowZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), where: PageDocumentWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowPageDocument.schema.js.map