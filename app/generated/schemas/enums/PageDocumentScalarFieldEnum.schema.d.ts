import * as z from 'zod';
export declare const PageDocumentScalarFieldEnumSchema: z.ZodEnum<{
    id: "id";
    title: "title";
    description: "description";
    createdAt: "createdAt";
    status: "status";
    updatedAt: "updatedAt";
    content: "content";
    slug: "slug";
}>;
export type PageDocumentScalarFieldEnum = z.infer<typeof PageDocumentScalarFieldEnumSchema>;
//# sourceMappingURL=PageDocumentScalarFieldEnum.schema.d.ts.map