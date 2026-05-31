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
export const NotificationUncheckedCreateInputObjectSchema = makeSchema();
export const NotificationUncheckedCreateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationUncheckedCreateInput.schema.js.map