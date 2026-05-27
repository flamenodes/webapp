import * as z from 'zod';

export const PageDocumentScalarFieldEnumSchema = z.enum(['id', 'slug', 'title', 'description', 'content', 'status', 'createdAt', 'updatedAt'])

export type PageDocumentScalarFieldEnum = z.infer<typeof PageDocumentScalarFieldEnumSchema>;