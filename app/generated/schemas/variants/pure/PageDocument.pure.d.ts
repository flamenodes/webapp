import * as z from 'zod';
export declare const PageDocumentModelSchema: z.ZodObject<{
    id: z.ZodString;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    content: z.ZodString;
    status: z.ZodEnum<{
        PUBLISHED: "PUBLISHED";
        DRAFT: "DRAFT";
    }>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strict>;
export type PageDocumentPureType = z.infer<typeof PageDocumentModelSchema>;
//# sourceMappingURL=PageDocument.pure.d.ts.map