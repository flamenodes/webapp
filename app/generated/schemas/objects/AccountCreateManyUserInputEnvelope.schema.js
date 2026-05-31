import * as z from 'zod';
import { AccountCreateManyUserInputObjectSchema as AccountCreateManyUserInputObjectSchema } from './AccountCreateManyUserInput.schema';
const makeSchema = () => z.object({
    data: z.union([z.lazy(() => AccountCreateManyUserInputObjectSchema), z.lazy(() => AccountCreateManyUserInputObjectSchema).array()]),
    skipDuplicates: z.boolean().optional()
}).strict();
export const AccountCreateManyUserInputEnvelopeObjectSchema = makeSchema();
export const AccountCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
//# sourceMappingURL=AccountCreateManyUserInputEnvelope.schema.js.map