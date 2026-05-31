import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAssignedTicketsInputObjectSchema as UserUpdateWithoutAssignedTicketsInputObjectSchema } from './UserUpdateWithoutAssignedTicketsInput.schema';
import { UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema as UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedUpdateWithoutAssignedTicketsInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => UserUpdateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectSchema = makeSchema();
export const UserUpdateToOneWithWhereWithoutAssignedTicketsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutAssignedTicketsInput.schema.js.map