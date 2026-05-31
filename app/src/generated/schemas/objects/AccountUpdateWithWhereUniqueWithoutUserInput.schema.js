import * as z from 'zod';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountUpdateWithoutUserInputObjectSchema as AccountUpdateWithoutUserInputObjectSchema } from './AccountUpdateWithoutUserInput.schema';
import { AccountUncheckedUpdateWithoutUserInputObjectSchema as AccountUncheckedUpdateWithoutUserInputObjectSchema } from './AccountUncheckedUpdateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => AccountUpdateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AccountUpdateWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const AccountUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountUpdateWithWhereUniqueWithoutUserInput.schema.js.map