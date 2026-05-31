import * as z from 'zod';
import { NotificationScalarWhereInputObjectSchema as NotificationScalarWhereInputObjectSchema } from './NotificationScalarWhereInput.schema';
import { NotificationUpdateManyMutationInputObjectSchema as NotificationUpdateManyMutationInputObjectSchema } from './NotificationUpdateManyMutationInput.schema';
import { NotificationUncheckedUpdateManyWithoutUserInputObjectSchema as NotificationUncheckedUpdateManyWithoutUserInputObjectSchema } from './NotificationUncheckedUpdateManyWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => NotificationScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => NotificationUpdateManyMutationInputObjectSchema), z.lazy(() => NotificationUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const NotificationUpdateManyWithWhereWithoutUserInputObjectSchema = makeSchema();
export const NotificationUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=NotificationUpdateManyWithWhereWithoutUserInput.schema.js.map