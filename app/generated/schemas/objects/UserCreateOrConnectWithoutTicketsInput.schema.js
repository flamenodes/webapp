import * as z from 'zod';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTicketsInputObjectSchema as UserCreateWithoutTicketsInputObjectSchema } from './UserCreateWithoutTicketsInput.schema';
import { UserUncheckedCreateWithoutTicketsInputObjectSchema as UserUncheckedCreateWithoutTicketsInputObjectSchema } from './UserUncheckedCreateWithoutTicketsInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => UserCreateWithoutTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTicketsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTicketsInputObjectSchema = makeSchema();
export const UserCreateOrConnectWithoutTicketsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserCreateOrConnectWithoutTicketsInput.schema.js.map