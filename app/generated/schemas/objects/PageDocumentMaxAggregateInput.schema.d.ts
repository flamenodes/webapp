import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const PageDocumentMaxAggregateInputObjectSchema: z.ZodType<Prisma.PageDocumentMaxAggregateInputType>;
export declare const PageDocumentMaxAggregateInputObjectZodSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodLiteral<true>>;
    slug: z.ZodOptional<z.ZodLiteral<true>>;
    title: z.ZodOptional<z.ZodLiteral<true>>;
    description: z.ZodOptional<z.ZodLiteral<true>>;
    content: z.ZodOptional<z.ZodLiteral<true>>;
    status: z.ZodOptional<z.ZodLiteral<true>>;
    createdAt: z.ZodOptional<z.ZodLiteral<true>>;
    updatedAt: z.ZodOptional<z.ZodLiteral<true>>;
}, z.core.$strict>;
//# sourceMappingURL=PageDocumentMaxAggregateInput.schema.d.ts.map