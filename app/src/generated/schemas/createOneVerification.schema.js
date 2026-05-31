import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationCreateInputObjectSchema as VerificationCreateInputObjectSchema } from './objects/VerificationCreateInput.schema';
import { VerificationUncheckedCreateInputObjectSchema as VerificationUncheckedCreateInputObjectSchema } from './objects/VerificationUncheckedCreateInput.schema';
export const VerificationCreateOneSchema = z.object({ select: VerificationSelectObjectSchema.optional(), data: z.union([VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema]) }).strict();
export const VerificationCreateOneZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), data: z.union([VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneVerification.schema.js.map