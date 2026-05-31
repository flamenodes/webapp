import * as z from 'zod';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutUserInputObjectSchema as NotificationUpdateWithoutUserInputObjectSchema } from './NotificationUpdateWithoutUserInput.schema';
import { NotificationUncheckedUpdateWithoutUserInputObjectSchema as NotificationUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => NotificationUpdateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationUpdateWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const NotificationUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationUpdateWithWhereUniqueWithoutUserInput.schema.js.map