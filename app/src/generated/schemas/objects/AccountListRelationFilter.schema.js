import * as z from 'zod';
import { AccountWhereInputObjectSchema as AccountWhereInputObjectSchema } from './AccountWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => AccountWhereInputObjectSchema).optional(),
    some: z.lazy(() => AccountWhereInputObjectSchema).optional(),
    none: z.lazy(() => AccountWhereInputObjectSchema).optional()
}).strict();
export const AccountListRelationFilterObjectSchema = makeSchema();
export const AccountListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountListRelationFilter.schema.js.map