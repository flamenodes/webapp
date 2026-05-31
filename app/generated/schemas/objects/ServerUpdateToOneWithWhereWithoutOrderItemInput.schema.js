import * as z from 'zod';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema';
import { ServerUpdateWithoutOrderItemInputObjectSchema as ServerUpdateWithoutOrderItemInputObjectSchema } from './ServerUpdateWithoutOrderItemInput.schema';
import { ServerUncheckedUpdateWithoutOrderItemInputObjectSchema as ServerUncheckedUpdateWithoutOrderItemInputObjectSchema } from './ServerUncheckedUpdateWithoutOrderItemInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ServerWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => ServerUpdateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutOrderItemInputObjectSchema)])
}).strict();
export const ServerUpdateToOneWithWhereWithoutOrderItemInputObjectSchema = makeSchema();
export const ServerUpdateToOneWithWhereWithoutOrderItemInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerUpdateToOneWithWhereWithoutOrderItemInput.schema.js.map