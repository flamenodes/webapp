import * as z from 'zod';
const makeSchema = () => z.object({
    pteroUserId: z.literal(true).optional()
}).strict();
export const UserAvgAggregateInputObjectSchema = makeSchema();
export const UserAvgAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserAvgAggregateInput.schema.js.map