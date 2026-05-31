import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumPageStatusWithAggregatesFilterObjectSchema as EnumPageStatusWithAggregatesFilterObjectSchema } from './EnumPageStatusWithAggregatesFilter.schema';
import { PageStatusSchema } from '../enums/PageStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
const pagedocumentscalarwherewithaggregatesinputSchema = z.object({
    AND: z.union([z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PageDocumentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    slug: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    status: z.union([z.lazy(() => EnumPageStatusWithAggregatesFilterObjectSchema), PageStatusSchema]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PageDocumentScalarWhereWithAggregatesInputObjectSchema = pagedocumentscalarwherewithaggregatesinputSchema;
export const PageDocumentScalarWhereWithAggregatesInputObjectZodSchema = pagedocumentscalarwherewithaggregatesinputSchema;
//# sourceMappingURL=PageDocumentScalarWhereWithAggregatesInput.schema.js.map