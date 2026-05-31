import * as z from 'zod';
import type { Prisma } from '../../../src/generated/prisma/client';
export declare const StringNullableListFilterObjectSchema: z.ZodType<Prisma.StringNullableListFilter>;
export declare const StringNullableListFilterObjectZodSchema: z.ZodObject<{
    equals: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    has: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    hasEvery: z.ZodOptional<z.ZodArray<z.ZodString>>;
    hasSome: z.ZodOptional<z.ZodArray<z.ZodString>>;
    isEmpty: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
//# sourceMappingURL=StringNullableListFilter.schema.d.ts.map