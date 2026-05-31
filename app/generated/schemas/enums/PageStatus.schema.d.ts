import * as z from 'zod';
export declare const PageStatusSchema: z.ZodEnum<{
    PUBLISHED: "PUBLISHED";
    DRAFT: "DRAFT";
}>;
export type PageStatus = z.infer<typeof PageStatusSchema>;
//# sourceMappingURL=PageStatus.schema.d.ts.map