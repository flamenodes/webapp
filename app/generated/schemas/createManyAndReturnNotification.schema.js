import * as z from 'zod';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationCreateManyInputObjectSchema as NotificationCreateManyInputObjectSchema } from './objects/NotificationCreateManyInput.schema';
export const NotificationCreateManyAndReturnSchema = z.object({ select: NotificationSelectObjectSchema.optional(), data: z.union([NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const NotificationCreateManyAndReturnZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(), data: z.union([NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnNotification.schema.js.map