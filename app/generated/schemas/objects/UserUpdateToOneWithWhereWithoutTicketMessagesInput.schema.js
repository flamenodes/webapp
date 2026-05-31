import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTicketMessagesInputObjectSchema as UserUpdateWithoutTicketMessagesInputObjectSchema } from './UserUpdateWithoutTicketMessagesInput.schema';
import { UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema as UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema } from './UserUncheckedUpdateWithoutTicketMessagesInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => UserUpdateWithoutTicketMessagesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTicketMessagesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectSchema = makeSchema();
export const UserUpdateToOneWithWhereWithoutTicketMessagesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutTicketMessagesInput.schema.js.map