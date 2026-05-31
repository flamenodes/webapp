import * as z from 'zod';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
const makeSchema = () => z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const AccountIncludeObjectSchema = makeSchema();
export const AccountIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountInclude.schema.js.map