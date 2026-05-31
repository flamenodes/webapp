import * as z from 'zod';
import { UserUpdateWithoutTicketMessagesInputObjectSchema as UserUpdateWithoutTicketMessagesInputObjectSchema } from './UserUpdateWithoutTicketMessagesInput.schema';
import { UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema as UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedUpdateWithoutTicketMessagesInput.schema';
import { UserCreateWithoutTicketMessagesInputObjectSchema as UserCreateWithoutTicketMessagesInputObjectSchema } from './UserCreateWithoutTicketMessagesInput.schema';
import { UserUncheckedCreateWithoutTicketMessagesInputObjectSchema as UserUncheckedCreateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedCreateWithoutTicketMessagesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema)]),
    create: z.union([z.lazy(() => UserCreateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketMessagesInputObjectSchema)]),
    where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTicketMessagesInputObjectSchema = makeSchema();
export const UserUpsertWithoutTicketMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpsertWithoutTicketMessagesInput.schema.js.map