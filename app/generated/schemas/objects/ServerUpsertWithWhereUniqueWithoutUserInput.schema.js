import * as z from 'zod';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './ServerWhereUniqueInput.schema';
import { ServerUpdateWithoutUserInputObjectSchema as ServerUpdateWithoutUserInputObjectSchema } from './ServerUpdateWithoutUserInput.schema';
import { ServerUncheckedUpdateWithoutUserInputObjectSchema as ServerUncheckedUpdateWithoutUserInputObjectSchema } from './ServerUncheckedUpdateWithoutUserInput.schema';
import { ServerCreateWithoutUserInputObjectSchema as ServerCreateWithoutUserInputObjectSchema } from './ServerCreateWithoutUserInput.schema';
import { ServerUncheckedCreateWithoutUserInputObjectSchema as ServerUncheckedCreateWithoutUserInputObjectSchema } from './ServerUncheckedCreateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ServerWhereUniqueInputObjectSchema),
    update: z.union([z.lazy(() => ServerUpdateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedUpdateWithoutUserInputObjectSchema)]),
    create: z.union([z.lazy(() => ServerCreateWithoutUserInputObjectSchema), z.lazy(() => ServerUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ServerUpsertWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const ServerUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerUpsertWithWhereUniqueWithoutUserInput.schema.js.map