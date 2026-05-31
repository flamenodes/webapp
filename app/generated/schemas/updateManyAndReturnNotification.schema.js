import * as z from 'zod';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './objects/NotificationSelect.schema';
import { NotificationUpdateManyMutationInputObjectSchema as NotificationUpdateManyMutationInputObjectSchema } from './objects/NotificationUpdateManyMutationInput.schema';
import { NotificationWhereInputObjectSchema as NotificationWhereInputObjectSchema } from './objects/NotificationWhereInput.schema';
export const NotificationUpdateManyAndReturnSchema = z.object({ select: NotificationSelectObjectSchema.optional(), data: NotificationUpdateManyMutationInputObjectSchema, where: NotificationWhereInputObjectSchema.optional() }).strict();
export const NotificationUpdateManyAndReturnZodSchema = z.object({ select: NotificationSelectObjectSchema.optional(), data: NotificationUpdateManyMutationInputObjectSchema, where: NotificationWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnNotification.schema.js.map