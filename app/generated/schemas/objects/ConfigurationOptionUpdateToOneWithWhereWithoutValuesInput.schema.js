import * as z from 'zod';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './ConfigurationOptionWhereInput.schema';
import { ConfigurationOptionUpdateWithoutValuesInputObjectSchema as ConfigurationOptionUpdateWithoutValuesInputObjectSchema } from './ConfigurationOptionUpdateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedUpdateWithoutValuesInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ConfigurationOptionWhereInputObjectSchema).optional(),
    data: z.union([z.lazy(() => ConfigurationOptionUpdateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedUpdateWithoutValuesInputObjectSchema)])
}).strict();
export const ConfigurationOptionUpdateToOneWithWhereWithoutValuesInputObjectSchema = makeSchema();
export const ConfigurationOptionUpdateToOneWithWhereWithoutValuesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionUpdateToOneWithWhereWithoutValuesInput.schema.js.map