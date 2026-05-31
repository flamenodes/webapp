import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const RazorpayConfigWhereUniqueInputObjectSchema = makeSchema();
export const RazorpayConfigWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=RazorpayConfigWhereUniqueInput.schema.js.map