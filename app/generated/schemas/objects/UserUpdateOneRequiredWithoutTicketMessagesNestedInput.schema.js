import * as z from 'zod';
import { UserCreateWithoutTicketMessagesInputObjectSchema as UserCreateWithoutTicketMessagesInputObjectSchema } from './UserCreateWithoutTicketMessagesInput.schema';
import { UserUncheckedCreateWithoutTicketMessagesInputObjectSchema as UserUncheckedCreateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedCreateWithoutTicketMessagesInput.schema';
import { UserCreateOrConnectWithoutTicketMessagesInputObjectSchema as UserCreateOrConnectWithoutTicketMessagesInputObjectSchema } from './UserCreateOrConnectWithoutTicketMessagesInput.schema';
import { UserUpsertWithoutTicketMessagesInputObjectSchema as UserUpsertWithoutTicketMessagesInputObjectSchema } from './UserUpsertWithoutTicketMessagesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectSchema as UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTicketMessagesInput.schema';
import { UserUpdateWithoutTicketMessagesInputObjectSchema as UserUpdateWithoutTicketMessagesInputObjectSchema } from './UserUpdateWithoutTicketMessagesInput.schema';
import { UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema as UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedUpdateWithoutTicketMessagesInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketMessagesInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTicketMessagesInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutTicketMessagesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUpdateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTicketMessagesNestedInputObjectSchema = makeSchema();
export const UserUpdateOneRequiredWithoutTicketMessagesNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpdateOneRequiredWithoutTicketMessagesNestedInput.schema.js.map