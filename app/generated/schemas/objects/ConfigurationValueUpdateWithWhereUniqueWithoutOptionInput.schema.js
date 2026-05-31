import * as z from 'zod';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './ConfigurationValueWhereUniqueInput.schema';
import { ConfigurationValueUpdateWithoutOptionInputObjectSchema as ConfigurationValueUpdateWithoutOptionInputObjectSchema } from './ConfigurationValueUpdateWithoutOptionInput.schema';
import { ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema as ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedUpdateWithoutOptionInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => ConfigurationValueUpdateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedUpdateWithoutOptionInputObjectSchema)])
}).strict();
export const ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectSchema = makeSchema();
export const ConfigurationValueUpdateWithWhereUniqueWithoutOptionInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueUpdateWithWhereUniqueWithoutOptionInput.schema.js.map