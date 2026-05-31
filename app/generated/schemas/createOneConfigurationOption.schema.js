import * as z from 'zod';
import { ConfigurationOptionSelectObjectSchema as ConfigurationOptionSelectObjectSchema } from './objects/ConfigurationOptionSelect.schema';
import { ConfigurationOptionIncludeObjectSchema as ConfigurationOptionIncludeObjectSchema } from './objects/ConfigurationOptionInclude.schema';
import { ConfigurationOptionCreateInputObjectSchema as ConfigurationOptionCreateInputObjectSchema } from './objects/ConfigurationOptionCreateInput.schema';
import { ConfigurationOptionUncheckedCreateInputObjectSchema as ConfigurationOptionUncheckedCreateInputObjectSchema } from './objects/ConfigurationOptionUncheckedCreateInput.schema';
export const ConfigurationOptionCreateOneSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), data: z.union([ConfigurationOptionCreateInputObjectSchema, ConfigurationOptionUncheckedCreateInputObjectSchema]) }).strict();
export const ConfigurationOptionCreateOneZodSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), data: z.union([ConfigurationOptionCreateInputObjectSchema, ConfigurationOptionUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneConfigurationOption.schema.js.map