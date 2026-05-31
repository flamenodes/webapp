import * as z from 'zod';
import { AccountScalarWhereInputObjectSchema as AccountScalarWhereInputObjectSchema } from './AccountScalarWhereInput.schema';
import { AccountUpdateManyMutationInputObjectSchema as AccountUpdateManyMutationInputObjectSchema } from './AccountUpdateManyMutationInput.schema';
import { AccountUncheckedUpdateManyWithoutUserInputObjectSchema as AccountUncheckedUpdateManyWithoutUserInputObjectSchema } from './AccountUncheckedUpdateManyWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => AccountScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => AccountUpdateManyMutationInputObjectSchema), z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AccountUpdateManyWithWhereWithoutUserInputObjectSchema = makeSchema();
export const AccountUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountUpdateManyWithWhereWithoutUserInput.schema.js.map