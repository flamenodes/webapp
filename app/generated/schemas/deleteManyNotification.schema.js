import * as z from 'zod';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
export const NotificationDeleteManySchema = z.object({ where: NotificationWhereInputObjectSchema.optional() }).strict();
export const NotificationDeleteManyZodSchema = z.object({ where: NotificationWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyNotification.schema.js.map