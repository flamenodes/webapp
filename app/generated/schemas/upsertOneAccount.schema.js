import * as z from 'zod';
import { AccountSelectObjectSchema as AccountSelectObjectSchema } from './objects/AccountSelect.schema';
import { AccountIncludeObjectSchema as AccountIncludeObjectSchema } from './objects/AccountInclude.schema';
import { AccountWhereUniqueInputObjectSchema as AccountWhereUniqueInputObjectSchema } from './objects/AccountWhereUniqueInput.schema';
import { AccountCreateInputObjectSchema as AccountCreateInputObjectSchema } from './objects/AccountCreateInput.schema';
import { AccountUncheckedCreateInputObjectSchema as AccountUncheckedCreateInputObjectSchema } from './objects/AccountUncheckedCreateInput.schema';
import { AccountUpdateInputObjectSchema as AccountUpdateInputObjectSchema } from './objects/AccountUpdateInput.schema';
import { AccountUncheckedUpdateInputObjectSchema as AccountUncheckedUpdateInputObjectSchema } from './objects/AccountUncheckedUpdateInput.schema';
export const AccountUpsertOneSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]), update: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]) }).strict();
export const AccountUpsertOneZodSchema = z.object({ select: AccountSelectObjectSchema.optional(), include: AccountIncludeObjectSchema.optional(), where: AccountWhereUniqueInputObjectSchema, create: z.union([AccountCreateInputObjectSchema, AccountUncheckedCreateInputObjectSchema]), update: z.union([AccountUpdateInputObjectSchema, AccountUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneAccount.schema.js.map