import * as z from 'zod';
import { UserCreateWithoutTicketMessagesInputObjectSchema as UserCreateWithoutTicketMessagesInputObjectSchema } from './UserCreateWithoutTicketMessagesInput.schema';
import { UserUncheckedCreateWithoutTicketMessagesInputObjectSchema as UserUncheckedCreateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedCreateWithoutTicketMessagesInput.schema';
import { UserCreateOrConnectWithoutTicketMessagesInputObjectSchema as UserCreateOrConnectWithoutTicketMessagesInputObjectSchema } from './UserCreateOrConnectWithoutTicketMessagesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketMessagesInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTicketMessagesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTicketMessagesInputObjectSchema = makeSchema();
export const UserCreateNestedOneWithoutTicketMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserCreateNestedOneWithoutTicketMessagesInput.schema.js.map