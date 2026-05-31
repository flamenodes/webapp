import * as z from 'zod';
import { ServerScalarWhereInputObjectSchema as ServerScalarWhereInputObjectSchema } from './ServerScalarWhereInput.schema';
import { ServerUpdateManyMutationInputObjectSchema as ServerUpdateManyMutationInputObjectSchema } from './ServerUpdateManyMutationInput.schema';
import { ServerUncheckedUpdateManyWithoutUserInputObjectSchema as ServerUncheckedUpdateManyWithoutUserInputObjectSchema } from './ServerUncheckedUpdateManyWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ServerScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => ServerUpdateManyMutationInputObjectSchema), z.lazy(() => ServerUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ServerUpdateManyWithWhereWithoutUserInputObjectSchema = makeSchema();
export const ServerUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ServerUpdateManyWithWhereWithoutUserInput.schema.js.map