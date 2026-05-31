import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    ip: SortOrderSchema.optional(),
    location: SortOrderSchema.optional(),
    type: SortOrderSchema.optional(),
    port: SortOrderSchema.optional(),
    protocol: SortOrderSchema.optional(),
    status: SortOrderSchema.optional(),
    latency: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    lastChecked: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    cpu: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    memory: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    disk: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional()
}).strict();
export const StatusNodeOrderByWithRelationInputObjectSchema = makeSchema();
export const StatusNodeOrderByWithRelationInputObjectZodSchema = makeSchema();
//# sourceMappingURL=StatusNodeOrderByWithRelationInput.schema.js.map