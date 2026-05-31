import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RazorpayConfigCountOrderByAggregateInputObjectSchema as RazorpayConfigCountOrderByAggregateInputObjectSchema } from './RazorpayConfigCountOrderByAggregateInput.schema';
import { RazorpayConfigMaxOrderByAggregateInputObjectSchema as RazorpayConfigMaxOrderByAggregateInputObjectSchema } from './RazorpayConfigMaxOrderByAggregateInput.schema';
import { RazorpayConfigMinOrderByAggregateInputObjectSchema as RazorpayConfigMinOrderByAggregateInputObjectSchema } from './RazorpayConfigMinOrderByAggregateInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    mode: SortOrderSchema.optional(),
    testKeyId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    testKeySecret: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    prodKeyId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    prodKeySecret: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    gstin: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    companyName: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    companyAddress: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    companyCity: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    companyZip: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    companyCountry: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    updatedAt: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    _count: z.lazy(() => RazorpayConfigCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => RazorpayConfigMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RazorpayConfigMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const RazorpayConfigOrderByWithAggregationInputObjectSchema = makeSchema();
export const RazorpayConfigOrderByWithAggregationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=RazorpayConfigOrderByWithAggregationInput.schema.js.map