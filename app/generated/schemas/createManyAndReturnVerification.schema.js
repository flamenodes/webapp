import * as z from 'zod';
import { VerificationSelectObjectSchema as VerificationSelectObjectSchema } from './objects/VerificationSelect.schema';
import { VerificationCreateManyInputObjectSchema as VerificationCreateManyInputObjectSchema } from './objects/VerificationCreateManyInput.schema';
export const VerificationCreateManyAndReturnSchema = z.object({ select: VerificationSelectObjectSchema.optional(), data: z.union([VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const VerificationCreateManyAndReturnZodSchema = z.object({ select: VerificationSelectObjectSchema.optional(), data: z.union([VerificationCreateManyInputObjectSchema, z.array(VerificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnVerification.schema.js.map