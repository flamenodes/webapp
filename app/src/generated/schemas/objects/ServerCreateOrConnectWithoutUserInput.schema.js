import * as z from 'zod';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerCreateWithoutUserInputObjectSchema as ServerCreateWithoutUserInputObjectSchema } from './ServerCreateWithoutUserInput.schema';
import { ServerUncheckedCreateWithoutUserInputObjectSchema as ServerUncheckedCreateWithoutUserInputObjectSchema } from './ServerUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ServerCreateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ServerCreateOrConnectWithoutUserInputObjectSchema = makeSchema();
export const ServerCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerCreateOrConnectWithoutUserInput.schema.js.map