import * as z from 'zod';
import { UserCreateWithoutTicketsInputObjectSchema as UserCreateWithoutTicketsInputObjectSchema } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputObjectSchema as UserUncheckedCreateWithoutTicketsInputObjectSchema } from './UserUncheckedCreateWithoutTicketsInput.schema';
import { UserCreateOrConnectWithoutTicketsInputObjectSchema as UserCreateOrConnectWithoutTicketsInputObjectSchema } from './UserCreateOrConnectWithoutTicketsInput.schema';
import { UserUpsertWithoutTicketsInputObjectSchema as UserUpsertWithoutTicketsInputObjectSchema } from './UserUpsertWithoutTicketsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTicketsInputObjectSchema as UserUpdateToOneWithWhereWithoutTicketsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTicketsInput.schema';
import { UserUpdateWithoutTicketsInputObjectSchema as UserUpdateWithoutTicketsInputObjectSchema } from './UserUpdateWithoutTicketsInput.schema';
import { UserUncheckedUpdateWithoutTicketsInputObjectSchema as UserUncheckedUpdateWithoutTicketsInputObjectSchema } from './UserUncheckedUpdateWithoutTicketsInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketsInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTicketsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutTicketsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTicketsInputObjectSchema), z.lazy(() => UserUpdateWithoutTicketsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTicketsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTicketsNestedInputObjectSchema = makeSchema();
export const UserUpdateOneRequiredWithoutTicketsNestedInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpdateOneRequiredWithoutTicketsNestedInput.schema.js.map