import * as z from 'zod';
import { UserCreateWithoutAssignedTicketsInputObjectSchema as UserCreateWithoutAssignedTicketsInputObjectSchema } from './UserCreateWithoutAssignedTicketsInput.schema';
import { UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema as UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema } from './UserUncheckedCreateWithoutAssignedTicketsInput.schema';
import { UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema as UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema } from './UserCreateOrConnectWithoutAssignedTicketsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => UserCreateWithoutAssignedTicketsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAssignedTicketsInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAssignedTicketsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAssignedTicketsInputObjectSchema = makeSchema();
export const UserCreateNestedOneWithoutAssignedTicketsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserCreateNestedOneWithoutAssignedTicketsInput.schema.js.map