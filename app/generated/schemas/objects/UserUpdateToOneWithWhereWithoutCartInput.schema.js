import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCartInputObjectSchema as UserUpdateWithoutCartInputObjectSchema } from './UserUpdateWithoutCartInput.schema';
import { UserUncheckedUpdateWithoutCartInputObjectSchema as UserUncheckedUpdateWithoutCartInputObjectSchema } from './UserUncheckedUpdateWithoutCartInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => UserWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => UserUpdateWithoutCartInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCartInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCartInputObjectSchema = makeSchema();
export const UserUpdateToOneWithWhereWithoutCartInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserUpdateToOneWithWhereWithoutCartInput.schema.js.map