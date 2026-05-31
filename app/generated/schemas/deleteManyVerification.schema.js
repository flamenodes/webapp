import * as z from 'zod';
import { VerificationWhereInputObjectSchema as VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';
export const VerificationDeleteManySchema = z.object({ where: VerificationWhereInputObjectSchema.optional() }).strict();
export const VerificationDeleteManyZodSchema = z.object({ where: VerificationWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyVerification.schema.js.map