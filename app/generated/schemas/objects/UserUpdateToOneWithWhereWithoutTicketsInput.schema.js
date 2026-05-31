import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTicketsInputObjectSchema as UserUpdateWithoutTicketsInputObjectSchema } from './UserUpdateWithoutTicketsInput.schema';
import { UserUncheckedUpdateWithoutTicketsInputObjectSchema as UserUncheckedUpdateWithoutTicketsInputObjectSchema } from './UserUncheckedUpdateWithoutTicketsInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => UserUpdateWithoutTicketsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTicketsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTicketsInputObjectSchema = makeSchema();
export const UserUpdateToOneWithWhereWithoutTicketsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutTicketsInput.schema.js.map