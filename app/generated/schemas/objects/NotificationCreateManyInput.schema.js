import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional(),
    userId: z.string(),
    type: z.string().optional(),
    title: z.string(),
    message: z.string(),
    read: z.boolean().optional(),
    createdAt: z.coerce.date().optional()
}).strict();
export const NotificationCreateManyInputObjectSchema = makeSchema();
export const NotificationCreateManyInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationCreateManyInput.schema.js.map