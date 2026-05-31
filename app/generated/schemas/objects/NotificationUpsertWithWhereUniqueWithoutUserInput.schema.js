import * as z from 'zod';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationUpdateWithoutUserInputObjectSchema as NotificationUpdateWithoutUserInputObjectSchema } from './NotificationUpdateWithoutUserInput.schema';
import { NotificationUncheckedUpdateWithoutUserInputObjectSchema as NotificationUncheckedUpdateWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateWithoutUserInput.schema';
import { NotificationCreateWithoutUserInputObjectSchema as NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema as NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => NotificationUpdateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateWithoutUserInputObjectSchema)]),
    create: z.union([z.lazy(() => NotificationCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationUpsertWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const NotificationUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationUpsertWithWhereUniqueWithoutUserInput.schema.js.map