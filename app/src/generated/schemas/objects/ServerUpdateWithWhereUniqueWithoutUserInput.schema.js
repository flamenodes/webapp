import * as z from 'zod';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutUserInputObjectSchema as ServerUpdateWithoutUserInputObjectSchema } from './ServerUpdateWithoutUserInput.schema';
import { ServerUncheckedUpdateWithoutUserInputObjectSchema as ServerUncheckedUpdateWithoutUserInputObjectSchema } from './ServerUncheckedUpdateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => ServerUpdateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ServerUpdateWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const ServerUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerUpdateWithWhereUniqueWithoutUserInput.schema.js.map