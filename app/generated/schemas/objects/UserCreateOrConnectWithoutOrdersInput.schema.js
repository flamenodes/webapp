import * as z from 'zod';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrdersInputObjectSchema as UserCreateWithoutOrdersInputObjectSchema } from './UserCreateWithoutOrdersInput.schema';
import { UserUncheckedCreateWithoutOrdersInputObjectSchema as UserUncheckedCreateWithoutOrdersInputObjectSchema } from './UserUncheckedCreateWithoutOrdersInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => UserCreateWithoutOrdersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutOrdersInputObjectSchema = makeSchema();
export const UserCreateOrConnectWithoutOrdersInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserCreateOrConnectWithoutOrdersInput.schema.js.map