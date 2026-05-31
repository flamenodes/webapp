import * as z from 'zod';
export declare const PageDocumentUpsertResultSchema: z.ZodObject<{
    id: z.ZodString;
    slug: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    content: z.ZodString;
    status: z.ZodUnknown;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
//# sourceMappingURL=PageDocumentUpsertResult.schema.d.ts.map