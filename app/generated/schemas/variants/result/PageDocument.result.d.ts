import * as z from 'zod';
export declare const PageDocumentResultSchema: z.ZodObject<{
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
export type PageDocumentResultType = z.infer<typeof PageDocumentResultSchema>;
//# sourceMappingURL=PageDocument.result.d.ts.map