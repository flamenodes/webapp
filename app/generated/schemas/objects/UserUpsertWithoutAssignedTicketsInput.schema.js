import * as z from 'zod';
import { UserUpdateWithoutAssignedTicketsInputObjectSchema as UserUpdateWithoutAssignedTicketsInputObjectSchema } from './UserUpdateWithoutAssignedTicketsInput.schema';
import { UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema as UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedUpdateWithoutAssignedTicketsInput.schema';
import { UserCreateWithoutAssignedTicketsInputObjectSchema as UserCreateWithoutAssignedTicketsInputObjectSchema } from './UserCreateWithoutAssignedTicketsInput.schema';
import { UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema as UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedCreateWithoutAssignedTicketsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAssignedTicketsInputObjectSchema)]),
    create: z.union([z.lazy(() => UserCreateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema)]),
    where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAssignedTicketsInputObjectSchema = makeSchema();
export const UserUpsertWithoutAssignedTicketsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpsertWithoutAssignedTicketsInput.schema.js.map