import * as z from 'zod';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    type: z.boolean().optional(),
    title: z.boolean().optional(),
    message: z.boolean().optional(),
    read: z.boolean().optional(),
    createdAt: z.boolean().optional()
}).strict();
export const NotificationSelectObjectSchema = makeSchema();
export const NotificationSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationSelect.schema.js.map