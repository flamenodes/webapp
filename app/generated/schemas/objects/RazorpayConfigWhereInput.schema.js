import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
const razorpayconfigwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => RazorpayConfigWhereInputObjectSchema), z.lazy(() => RazorpayConfigWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => RazorpayConfigWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => RazorpayConfigWhereInputObjectSchema), z.lazy(() => RazorpayConfigWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    mode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    testKeyId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    testKeySecret: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    prodKeyId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    prodKeySecret: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    gstin: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    companyName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    companyAddress: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    companyCity: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    companyZip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    companyCountry: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const RazorpayConfigWhereInputObjectSchema = razorpayconfigwhereinputSchema;
export const RazorpayConfigWhereInputObjectZodSchema = razorpayconfigwhereinputSchema;
//# sourceMappingURL=RazorpayConfigWhereInput.schema.js.map