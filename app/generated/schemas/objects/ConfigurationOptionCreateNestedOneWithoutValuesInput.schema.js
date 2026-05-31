import * as z from 'zod';
import { ConfigurationOptionCreateWithoutValuesInputObjectSchema as ConfigurationOptionCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateWithoutValuesInput.schema';
import { ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema as ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema } from './ConfigurationOptionUncheckedCreateWithoutValuesInput.schema';
import { ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema as ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema } from './ConfigurationOptionCreateOrConnectWithoutValuesInput.schema';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './ConfigurationOptionWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ConfigurationOptionCreateWithoutValuesInputObjectSchema), z.lazy(() => ConfigurationOptionUncheckedCreateWithoutValuesInputObjectSchema)]).optional(),
    connectOrCreate: z.lazy(() => ConfigurationOptionCreateOrConnectWithoutValuesInputObjectSchema).optional(),
    connect: z.lazy(() => ConfigurationOptionWhereUniqueInputObjectSchema).optional()
}).strict();
export const ConfigurationOptionCreateNestedOneWithoutValuesInputObjectSchema = makeSchema();
export const ConfigurationOptionCreateNestedOneWithoutValuesInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationOptionCreateNestedOneWithoutValuesInput.schema.js.map