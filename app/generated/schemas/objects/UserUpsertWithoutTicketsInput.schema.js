import * as z from 'zod';
import { UserUpdateWithoutTicketsInputObjectSchema as UserUpdateWithoutTicketsInputObjectSchema } from './UserUpdateWithoutTicketsInput.schema';
import { UserUncheckedUpdateWithoutTicketsInputObjectSchema as UserUncheckedUpdateWithoutTicketsInputObjectSchema } from './UserUncheckedUpdateWithoutTicketsInput.schema';
import { UserCreateWithoutTicketsInputObjectSchema as UserCreateWithoutTicketsInputObjectSchema } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputObjectSchema as UserUncheckedCreateWithoutTicketsInputObjectSchema } from './UserUncheckedCreateWithoutTicketsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
const makeSchema = () => z.object({
    update: z.union([z.lazy(() => UserUpdateWithoutTicketsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTicketsInputObjectSchema)]),
    create: z.union([z.lazy(() => UserCreateWithoutTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketsInputObjectSchema)]),
    where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTicketsInputObjectSchema = makeSchema();
export const UserUpsertWithoutTicketsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpsertWithoutTicketsInput.schema.js.map