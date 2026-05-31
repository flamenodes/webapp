import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './objects/ConfigurationValueInclude.schema';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './objects/ConfigurationValueWhereUniqueInput.schema';
export const ConfigurationValueFindUniqueOrThrowSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), where: ConfigurationValueWhereUniqueInputObjectSchema }).strict();
export const ConfigurationValueFindUniqueOrThrowZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), where: ConfigurationValueWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowConfigurationValue.schema.js.map