import * as z from 'zod';
import { UserCreateWithoutServersInputObjectSchema as UserCreateWithoutServersInputObjectSchema } from './UserCreateWithoutServersInput.schema';
import { UserUncheckedCreateWithoutServersInputObjectSchema as UserUncheckedCreateWithoutServersInputObjectSchema } from './UserUncheckedCreateWithoutServersInput.schema';
import { UserCreateOrConnectWithoutServersInputObjectSchema as UserCreateOrConnectWithoutServersInputObjectSchema } from './UserCreateOrConnectWithoutServersInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutServersInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutServersInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutServersInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutServersInputObjectSchema = makeSchema();
export const UserCreateNestedOneWithoutServersInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserCreateNestedOneWithoutServersInput.schema.js.map