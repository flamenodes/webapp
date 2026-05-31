import * as z from 'zod';
import { ServerCreateWithoutOrderItemInputObjectSchema as ServerCreateWithoutOrderItemInputObjectSchema } from './ServerCreateWithoutOrderItemInput.schema';
import { ServerUncheckedCreateWithoutOrderItemInputObjectSchema as ServerUncheckedCreateWithoutOrderItemInputObjectSchema } from './ServerUncheckedCreateWithoutOrderItemInput.schema';
import { ServerCreateOrConnectWithoutOrderItemInputObjectSchema as ServerCreateOrConnectWithoutOrderItemInputObjectSchema } from './ServerCreateOrConnectWithoutOrderItemInput.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ServerCreateWithoutOrderItemInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutOrderItemInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => ServerCreateOrConnectWithoutOrderItemInputObjectSchema).optional(),
    connect: z.lazy(() => ServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const ServerUncheckedCreateNestedOneWithoutOrderItemInputObjectSchema = makeSchema();
export const ServerUncheckedCreateNestedOneWithoutOrderItemInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerUncheckedCreateNestedOneWithoutOrderItemInput.schema.js.map