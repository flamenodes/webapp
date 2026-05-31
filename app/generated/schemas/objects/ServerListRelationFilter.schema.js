import * as z from 'zod';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => ServerWhereInputObjectSchema).optional(),
    some: z.lazy(() => ServerWhereInputObjectSchema).optional(),
    none: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const ServerListRelationFilterObjectSchema = makeSchema();
export const ServerListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerListRelationFilter.schema.js.map