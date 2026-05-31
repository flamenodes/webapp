import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutNotificationsInputObjectSchema as UserUpdateWithoutNotificationsInputObjectSchema } from './UserUpdateWithoutNotificationsInput.schema';
import { UserUncheckedUpdateWithoutNotificationsInputObjectSchema as UserUncheckedUpdateWithoutNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationsInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => UserUpdateWithoutNotificationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutNotificationsInputObjectSchema = makeSchema();
export const UserUpdateToOneWithWhereWithoutNotificationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutNotificationsInput.schema.js.map