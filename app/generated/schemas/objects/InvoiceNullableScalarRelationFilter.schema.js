import * as z from 'zod';
import { InvoiceWhereInputObjectSchema as InvoiceWhereInputObjectSchema } from './InvoiceWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => InvoiceWhereInputObjectSchema).optional().nullable(),
    isNot: z.lazy(() => InvoiceWhereInputObjectSchema).optional().nullable()
}).strict();
export const InvoiceNullableScalarRelationFilterObjectSchema = makeSchema();
export const InvoiceNullableScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=InvoiceNullableScalarRelationFilter.schema.js.map