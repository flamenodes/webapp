import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationWhereUniqueInputObjectSchema as VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
export const VerificationFindUniqueSchema = z.object({ select: VerificationSelectObjectSchema.optional(), where: VerificationWhereUniqueInputObjectSchema }).strict();
export const VerificationFindUniqueZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), where: VerificationWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueVerification.schema.js.map