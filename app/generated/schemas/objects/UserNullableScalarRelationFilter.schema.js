import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
const makeSchema = () => z.object({
    is: z.lazy(() => UserWhereInputObjectSchema).optional().nullable(),
    isNot: z.lazy(() => UserWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserNullableScalarRelationFilterObjectSchema = makeSchema();
export const UserNullableScalarRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=UserNullableScalarRelationFilter.schema.js.map