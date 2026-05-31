import * as z from 'zod';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTicketMessagesInputObjectSchema as UserCreateWithoutTicketMessagesInputObjectSchema } from './UserCreateWithoutTicketMessagesInput.schema';
import { UserUncheckedCreateWithoutTicketMessagesInputObjectSchema as UserUncheckedCreateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedCreateWithoutTicketMessagesInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => UserCreateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketMessagesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTicketMessagesInputObjectSchema = makeSchema();
export const UserCreateOrConnectWithoutTicketMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserCreateOrConnectWithoutTicketMessagesInput.schema.js.map