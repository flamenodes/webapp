import * as z from 'zod';
import { PageDocumentSelectObjectSchema as PageDocumentSelectObjectSchema } from './objects/PageDocumentSelect.schema';
import { PageDocumentUpdateManyMutationInputObjectSchema as PageDocumentUpdateManyMutationInputObjectSchema } from './objects/PageDocumentUpdateManyMutationInput.schema';
import { PageDocumentWhereInputObjectSchema as PageDocumentWhereInputObjectSchema } from './objects/PageDocumentWhereInput.schema';
export const PageDocumentUpdateManyAndReturnSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: PageDocumentUpdateManyMutationInputObjectSchema, where: PageDocumentWhereInputObjectSchema.optional() }).strict();
export const PageDocumentUpdateManyAndReturnZodSchema = z.object({ select: PageDocumentSelectObjectSchema.optional(), data: PageDocumentUpdateManyMutationInputObjectSchema, where: PageDocumentWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnPageDocument.schema.js.map