import * as z from 'zod';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => ServerWhereInputObjectSchema).optional().nullable(),
    isNot: z.lazy(() => ServerWhereInputObjectSchema).optional().nullable()
}).strict();
export const ServerNullableScalarRelationFilterObjectSchema = makeSchema();
export const ServerNullableScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerNullableScalarRelationFilter.schema.js.map