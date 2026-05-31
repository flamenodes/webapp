import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationWhereUniqueInputObjectSchema as VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
import { VerificationCreateInputObjectSchema as VerificationCreateInputObjectSchema } from './objects/VerificationCreateInput.schema';
import { VerificationUncheckedCreateInputObjectSchema as VerificationUncheckedCreateInputObjectSchema } from './objects/VerificationUncheckedCreateInput.schema';
import { VerificationUpdateInputObjectSchema as VerificationUpdateInputObjectSchema } from './objects/VerificationUpdateInput.schema';
import { VerificationUncheckedUpdateInputObjectSchema as VerificationUncheckedUpdateInputObjectSchema } from './objects/VerificationUncheckedUpdateInput.schema';
export const VerificationUpsertOneSchema = z.object({ select: VerificationSelectObjectSchema.optional(), where: VerificationWhereUniqueInputObjectSchema, create: z.union([VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema]), update: z.union([VerificationUpdateInputObjectSchema, VerificationUncheckedUpdateInputObjectSchema]) }).strict();
export const VerificationUpsertOneZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), where: VerificationWhereUniqueInputObjectSchema, create: z.union([VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema]), update: z.union([VerificationUpdateInputObjectSchema, VerificationUncheckedUpdateInputObjectSchema]) }).strict();
//# sourceMappingURL=upsertOneVerification.schema.js.map