import * as z from 'zod';
import { ConfigurationOptionSelectObjectSchema as ConfigurationOptionSelectObjectSchema } from './objects/ConfigurationOptionSelect.schema';
import { ConfigurationOptionUpdateManyMutationInputObjectSchema as ConfigurationOptionUpdateManyMutationInputObjectSchema } from './objects/ConfigurationOptionUpdateManyMutationInput.schema';
import { ConfigurationOptionWhereInputObjectSchema as ConfigurationOptionWhereInputObjectSchema } from './objects/ConfigurationOptionWhereInput.schema';
export const ConfigurationOptionUpdateManyAndReturnSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), data: ConfigurationOptionUpdateManyMutationInputObjectSchema, where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict();
export const ConfigurationOptionUpdateManyAndReturnZodSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), data: ConfigurationOptionUpdateManyMutationInputObjectSchema, where: ConfigurationOptionWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnConfigurationOption.schema.js.map