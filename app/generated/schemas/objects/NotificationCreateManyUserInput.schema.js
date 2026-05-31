import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    type: z.string().optional(),
    title: z.string(),
    message: z.string(),
    read: z.boolean().optional(),
    createdAt: z.coerce.date().optional()
}).strict();
export const NotificationCreateManyUserInputObjectSchema = makeSchema();
export const NotificationCreateManyUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationCreateManyUserInput.schema.js.map