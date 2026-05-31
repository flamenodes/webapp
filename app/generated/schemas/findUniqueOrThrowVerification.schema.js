import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationWhereUniqueInputObjectSchema as VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
export const VerificationFindUniqueOrThrowSchema = z.object({ select: VerificationSelectObjectSchema.optional(), where: VerificationWhereUniqueInputObjectSchema }).strict();
export const VerificationFindUniqueOrThrowZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), where: VerificationWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowVerification.schema.js.map