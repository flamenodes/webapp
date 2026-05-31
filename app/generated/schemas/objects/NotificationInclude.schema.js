import * as z from 'zod';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
const makeSchema = () => z.object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const NotificationIncludeObjectSchema = makeSchema();
export const NotificationIncludeObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationInclude.schema.js.map