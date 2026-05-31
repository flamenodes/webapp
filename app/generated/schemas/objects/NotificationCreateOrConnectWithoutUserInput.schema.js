import * as z from 'zod';
import { NotificationWhereUniqueInputObjectSchema as NotificationWhereUniqueInputObjectSchema } from './NotificationWhereUniqueInput.schema';
import { NotificationCreateWithoutUserInputObjectSchema as NotificationCreateWithoutUserInputObjectSchema } from './NotificationCreateWithoutUserInput.schema';
import { NotificationUncheckedCreateWithoutUserInputObjectSchema as NotificationUncheckedCreateWithoutUserInputObjectSchema } from './NotificationUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => NotificationWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => NotificationCreateWithoutUserInputObjectSchema), z.lazy(() => NotificationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const NotificationCreateOrConnectWithoutUserInputObjectSchema = makeSchema();
export const NotificationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationCreateOrConnectWithoutUserInput.schema.js.map