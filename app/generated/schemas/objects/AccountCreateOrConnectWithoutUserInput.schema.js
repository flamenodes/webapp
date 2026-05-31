import * as z from 'zod';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './AccountWhereUniqueInput.schema';
import { AccountCreateWithoutUserInputObjectSchema as AccountCreateWithoutUserInputObjectSchema } from './AccountCreateWithoutUserInput.schema';
import { AccountUncheckedCreateWithoutUserInputObjectSchema as AccountUncheckedCreateWithoutUserInputObjectSchema } from './AccountUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => AccountCreateWithoutUserInputObjectSchema), z.lazy(() => AccountUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AccountCreateOrConnectWithoutUserInputObjectSchema = makeSchema();
export const AccountCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCreateOrConnectWithoutUserInput.schema.js.map