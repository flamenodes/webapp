import * as z from 'zod';
const makeSchema = () => z.object({
    pteroUserId: z.literal(true).optional()
}).strict();
export const UserSumAggregateInputObjectSchema = makeSchema();
export const UserSumAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserSumAggregateInput.schema.js.map