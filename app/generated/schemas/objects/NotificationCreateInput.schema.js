import * as z from 'zod';
import { UserCreateNestedOneWithoutNotificationsInputObjectSchema as UserCreateNestedOneWithoutNotificationsInputObjectSchema } from './UserCreateNestedOneWithoutNotificationsInput.schema';
const makeSchema = () => z.object({
    id: z.string().optional(),
    type: z.string().optional(),
    title: z.string(),
    message: z.string(),
    read: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutNotificationsInputObjectSchema)
}).strict();
export const NotificationCreateInputObjectSchema = makeSchema();
export const NotificationCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationCreateInput.schema.js.map