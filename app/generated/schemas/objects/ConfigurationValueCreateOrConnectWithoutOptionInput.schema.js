import * as z from 'zod';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './ConfigurationValueWhereUniqueInput.schema';
import { ConfigurationValueCreateWithoutOptionInputObjectSchema as ConfigurationValueCreateWithoutOptionInputObjectSchema } from './ConfigurationValueCreateWithoutOptionInput.schema';
import { ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema as ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedCreateWithoutOptionInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema),
    create: z.union([z.lazy(() => ConfigurationValueCreateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema)])
}).strict();
export const ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema = makeSchema();
export const ConfigurationValueCreateOrConnectWithoutOptionInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueCreateOrConnectWithoutOptionInput.schema.js.map