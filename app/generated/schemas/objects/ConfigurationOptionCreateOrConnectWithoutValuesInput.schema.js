import * as z from 'zod';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './ConfigurationOptionWhereUniqueInput.schema';
import { ConfigurationOptionCreateWithoutValuesInputObjectSchema as ConfigurationOptionCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedCreateWithoutValuesInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ConfigurationOptionWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ConfigurationOptionCreateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema)])
}).strict();
export const ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema = makeSchema();
export const ConfigurationOptionCreateOrConnectWithoutValuesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionCreateOrConnectWithoutValuesInput.schema.js.map