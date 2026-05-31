import * as z from 'zod';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    token: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    ipAddress: z.boolean().optional(),
    userAgent: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    impersonatedBy: z.boolean().optional()
}).strict();
export const SessionSelectObjectSchema = makeSchema();
export const SessionSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionSelect.schema.js.map