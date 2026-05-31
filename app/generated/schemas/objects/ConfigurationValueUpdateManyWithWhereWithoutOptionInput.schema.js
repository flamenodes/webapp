import * as z from 'zod';
import { ConfigurationValueScalarWhereInputObjectSchema as ConfigurationValueScalarWhereInputObjectSchema } from './ConfigurationValueScalarWhereInput.schema';
import { ConfigurationValueUpdateManyMutationInputObjectSchema as ConfigurationValueUpdateManyMutationInputObjectSchema } from './ConfigurationValueUpdateManyMutationInput.schema';
import { ConfigurationValueUncheckedUpdateManyWithoutOptionInputObjectSchema as ConfigurationValueUncheckedUpdateManyWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedUpdateManyWithoutOptionInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ConfigurationValueScalarWhereInputObjectSchema),
    data: z.union([z.lazy(() => ConfigurationValueUpdateManyMutationInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedUpdateManyWithoutOptionInputObjectSchema)])
}).strict();
export const ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectSchema = makeSchema();
export const ConfigurationValueUpdateManyWithWhereWithoutOptionInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueUpdateManyWithWhereWithoutOptionInput.schema.js.map