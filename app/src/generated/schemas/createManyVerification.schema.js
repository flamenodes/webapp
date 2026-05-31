import * as z from 'zod';
import { VerificationCreateManyInputObjectSchema as VerificationCreateManyInputObjectSchema } from './objects/VerificationCreateManyInput.schema';
export const VerificationCreateManySchema = z.object({ data: z.union([VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const VerificationCreateManyZodSchema = z.object({ data: z.union([VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyVerification.schema.js.map