import * as z from 'zod';
import { PageDocumentOrderByWithRelationInputObjectSchema as PageDocumentOrderByWithRelationInputObjectSchema } from './objects/PageDocumentOrderByWithRelationInput.schema';
import { PageDocumentWhereInputObjectSchema as PageDocumentWhereInputObjectSchema } from './objects/PageDocumentWhereInput.schema';
import { PageDocumentWhereUniqueInputObjectSchema as PageDocumentWhereUniqueInputObjectSchema } from './objects/PageDocumentWhereUniqueInput.schema';
import { PageDocumentScalarFieldEnumSchema } from './enums/PageDocumentScalarFieldEnum.schema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const PageDocumentFindFirstOrThrowSelectSchema = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    content: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const PageDocumentFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    slug: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    content: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
}).strict();
export const PageDocumentFindFirstOrThrowSchema = z.object({ select: PageDocumentFindFirstOrThrowSelectSchema.optional(), orderBy: z.union([PageDocumentOrderByWithRelationInputObjectSchema, PageDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageDocumentWhereInputObjectSchema.optional(), cursor: PageDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PageDocumentScalarFieldEnumSchema, PageDocumentScalarFieldEnumSchema.array()]).optional() }).strict();
export const PageDocumentFindFirstOrThrowZodSchema = z.object({ select: PageDocumentFindFirstOrThrowSelectSchema.optional(), orderBy: z.union([PageDocumentOrderByWithRelationInputObjectSchema, PageDocumentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PageDocumentWhereInputObjectSchema.optional(), cursor: PageDocumentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PageDocumentScalarFieldEnumSchema, PageDocumentScalarFieldEnumSchema.array()]).optional() }).strict();
//# sourceMappingURL=findFirstOrThrowPageDocument.schema.js.map