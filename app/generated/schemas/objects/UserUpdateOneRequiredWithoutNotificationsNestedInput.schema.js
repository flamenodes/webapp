import * as z from 'zod';
import { UserCreateWithoutNotificationsInputObjectSchema as UserCreateWithoutNotificationsInputObjectSchema } from './UserCreateWithoutNotificationsInput.schema';
import { UserUncheckedCreateWithoutNotificationsInputObjectSchema as UserUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationsInput.schema';
import { UserCreateOrConnectWithoutNotificationsInputObjectSchema as UserCreateOrConnectWithoutNotificationsInputObjectSchema } from './UserCreateOrConnectWithoutNotificationsInput.schema';
import { UserUpsertWithoutNotificationsInputObjectSchema as UserUpsertWithoutNotificationsInputObjectSchema } from './UserUpsertWithoutNotificationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutNotificationsInputObjectSchema as UserUpdateToOneWithWhereWithoutNotificationsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutNotificationsInput.schema';
import { UserUpdateWithoutNotificationsInputObjectSchema as UserUpdateWithoutNotificationsInputObjectSchema } from './UserUpdateWithoutNotificationsInput.schema';
import { UserUncheckedUpdateWithoutNotificationsInputObjectSchema as UserUncheckedUpdateWithoutNotificationsInputObjectSchema } from './UserUncheckedUpdateWithoutNotificationsInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutNotificationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificationsInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutNotificationsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutNotificationsInputObjectSchema), z.lazy(() => UserUpdateWithoutNotificationsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutNotificationsNestedInputObjectSchema = makeSchema();
export const UserUpdateOneRequiredWithoutNotificationsNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpdateOneRequiredWithoutNotificationsNestedInput.schema.js.map