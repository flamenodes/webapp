import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationWhereUniqueInputObjectSchema as VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
export const VerificationDeleteOneSchema = z.object({ select: VerificationSelectObjectSchema.optional(), where: VerificationWhereUniqueInputObjectSchema }).strict();
export const VerificationDeleteOneZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), where: VerificationWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneVerification.schema.js.map