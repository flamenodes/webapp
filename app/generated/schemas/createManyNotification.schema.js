import * as z from 'zod';
import { NotificationCreateManyInputObjectSchema as NotificationCreateManyInputObjectSchema } from './objects/NotificationCreateManyInput.schema';
export const NotificationCreateManySchema = z.object({ data: z.union([NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const NotificationCreateManyZodSchema = z.object({ data: z.union([NotificationCreateManyInputObjectSchema, z.array(NotificationCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyNotification.schema.js.map