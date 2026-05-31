import * as z from 'zod';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutOrderItemInputObjectSchema as ServerCreateWithoutOrderItemInputObjectSchema } from './ServerCreateWithoutOrderItemInput.schema';
import { ServerUncheckedCreateWithoutOrderItemInputObjectSchema as ServerUncheckedCreateWithoutOrderItemInputObjectSchema } from './ServerUncheckedCreateWithoutOrderItemInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ServerCreateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutOrderItemInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutOrderItemInputObjectSchema = makeSchema();
export const ServerCreateOrConnectWithoutOrderItemInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerCreateOrConnectWithoutOrderItemInput.schema.js.map