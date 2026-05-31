import * as z from 'zod';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './NotificationWhereInput.schema';
const makeSchema = () => z.object({
    every: z.lazy(() => NotificationWhereInputObjectSchema).optional(),
    some: z.lazy(() => NotificationWhereInputObjectSchema).optional(),
    none: z.lazy(() => NotificationWhereInputObjectSchema).optional()
}).strict();
export const NotificationListRelationFilterObjectSchema = makeSchema();
export const NotificationListRelationFilterObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationListRelationFilter.schema.js.map