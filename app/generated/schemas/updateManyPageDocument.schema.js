import * as z from 'zod';
import { PageDocumentUpdateManyMutationInputObjectSchema as PageDocumentUpdateManyMutationInputObjectSchema } from './objects/PageDocumentUpdateManyMutationInput.schema';
import { PageDocumentWhereInputObjectSchema as PageDocumentWhereInputObjectSchema } from './objects/PageDocumentWhereInput.schema';
export const PageDocumentUpdateManySchema = z.object({ data: PageDocumentUpdateManyMutationInputObjectSchema, where: PageDocumentWhereInputObjectSchema.optional() }).strict();
export const PageDocumentUpdateManyZodSchema = z.object({ data: PageDocumentUpdateManyMutationInputObjectSchema, where: PageDocumentWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyPageDocument.schema.js.map