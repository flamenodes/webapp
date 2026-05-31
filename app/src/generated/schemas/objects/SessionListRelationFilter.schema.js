import * as z from 'zod';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './SessionWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => SessionWhereInputObjectSchema).optional(),
    some: z.lazy(() => SessionWhereInputObjectSchema).optional(),
    none: z.lazy(() => SessionWhereInputObjectSchema).optional()
}).strict();
export const SessionListRelationFilterObjectSchema = makeSchema();
export const SessionListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionListRelationFilter.schema.js.map