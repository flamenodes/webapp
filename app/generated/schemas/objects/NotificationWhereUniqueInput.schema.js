import * as z from 'zod';
const makeSchema = () => z.object({
    id: z.string().optional()
}).strict();
export const NotificationWhereUniqueInputObjectSchema = makeSchema();
export const NotificationWhereUniqueInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationWhereUniqueInput.schema.js.map