import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueUpdateManyMutationInputObjectSchema as ConfigurationValueUpdateManyMutationInputObjectSchema } from './objects/ConfigurationValueUpdateManyMutationInput.schema';
import { ConfigurationValueWhereInputObjectSchema as ConfigurationValueWhereInputObjectSchema } from './objects/ConfigurationValueWhereInput.schema';
export const ConfigurationValueUpdateManyAndReturnSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), data: ConfigurationValueUpdateManyMutationInputObjectSchema, where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();
export const ConfigurationValueUpdateManyAndReturnZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), data: ConfigurationValueUpdateManyMutationInputObjectSchema, where: ConfigurationValueWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnConfigurationValue.schema.js.map