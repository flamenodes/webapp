import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './objects/ConfigurationValueInclude.schema';
import { ConfigurationValueCreateInputObjectSchema as ConfigurationValueCreateInputObjectSchema } from './objects/ConfigurationValueCreateInput.schema';
import { ConfigurationValueUncheckedCreateInputObjectSchema as ConfigurationValueUncheckedCreateInputObjectSchema } from './objects/ConfigurationValueUncheckedCreateInput.schema';
export const ConfigurationValueCreateOneSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), data: z.union([ConfigurationValueCreateInputObjectSchema, ConfigurationValueUncheckedCreateInputObjectSchema]) }).strict();
export const ConfigurationValueCreateOneZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), data: z.union([ConfigurationValueCreateInputObjectSchema, ConfigurationValueUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneConfigurationValue.schema.js.map