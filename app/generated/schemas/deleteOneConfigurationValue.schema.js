import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './objects/ConfigurationValueInclude.schema';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './objects/ConfigurationValueWhereUniqueInput.schema';
export const ConfigurationValueDeleteOneSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), where: ConfigurationValueWhereUniqueInputObjectSchema }).strict();
export const ConfigurationValueDeleteOneZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), where: ConfigurationValueWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneConfigurationValue.schema.js.map