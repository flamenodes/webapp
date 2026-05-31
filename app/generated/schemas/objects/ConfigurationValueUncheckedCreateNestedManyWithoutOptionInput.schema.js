import * as z from 'zod';
import { ConfigurationValueCreateWithoutOptionInputObjectSchema as ConfigurationValueCreateWithoutOptionInputObjectSchema } from './ConfigurationValueCreateWithoutOptionInput.schema';
import { ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema as ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema } from './ConfigurationValueUncheckedCreateWithoutOptionInput.schema';
import { ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema as ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema } from './ConfigurationValueCreateOrConnectWithoutOptionInput.schema';
import { ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema as ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema } from './ConfigurationValueCreateManyOptionInputEnvelope.schema';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './ConfigurationValueWhereUniqueInput.schema';
const makeSchema = () => z.object({
    create: z.union([z.lazy(() => ConfigurationValueCreateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueCreateWithoutOptionInputObjectSchema).array(), z.lazy(() => ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueUncheckedCreateWithoutOptionInputObjectSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema), z.lazy(() => ConfigurationValueCreateOrConnectWithoutOptionInputObjectSchema).array()]).optional(),
    createMany: z.lazy(() => ConfigurationValueCreateManyOptionInputEnvelopeObjectSchema).optional(),
    connect: z.union([z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema), z.lazy(() => ConfigurationValueWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ConfigurationValueUncheckedCreateNestedManyWithoutOptionInputObjectSchema = makeSchema();
export const ConfigurationValueUncheckedCreateNestedManyWithoutOptionInputObjectZodSchema = makeSchema();
//# sourceMappingURL=ConfigurationValueUncheckedCreateNestedManyWithoutOptionInput.schema.js.map