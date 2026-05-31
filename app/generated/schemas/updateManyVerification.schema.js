import * as z from 'zod';
import { VerificationUpdateManyMutationInputObjectSchema as VerificationUpdateManyMutationInputObjectSchema } from './objects/VerificationUpdateManyMutationInput.schema';
import { VerificationWhereInputObjectSchema as VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';
export const VerificationUpdateManySchema = z.object({ data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict();
export const VerificationUpdateManyZodSchema = z.object({ data: VerificationUpdateManyMutationInputObjectSchema, where: VerificationWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyVerification.schema.js.map