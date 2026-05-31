import * as z from 'zod';
export declare const PageDocumentInputSchema: z.ZodObject<{
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
export type PageDocumentInputType = z.infer<typeof PageDocumentInputSchema>;
//# sourceMappingURL=PageDocument.input.d.ts.map