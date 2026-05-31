import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const VerificationWhereUniqueInputObjectSchema = makeSchema();
export const VerificationWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=VerificationWhereUniqueInput.schema.js.map