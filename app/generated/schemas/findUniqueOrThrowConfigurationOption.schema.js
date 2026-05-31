import * as z from 'zod';
import { ConfigurationOptionSelectObjectSchema as ConfigurationOptionSelectObjectSchema } from './objects/ConfigurationOptionSelect.schema';
import { ConfigurationOptionIncludeObjectSchema as ConfigurationOptionIncludeObjectSchema } from './objects/ConfigurationOptionInclude.schema';
import { ConfigurationOptionWhereUniqueInputObjectSchema as ConfigurationOptionWhereUniqueInputObjectSchema } from './objects/ConfigurationOptionWhereUniqueInput.schema';
export const ConfigurationOptionFindUniqueOrThrowSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), where: ConfigurationOptionWhereUniqueInputObjectSchema }).strict();
export const ConfigurationOptionFindUniqueOrThrowZodSchema = z.object({ select: ConfigurationOptionSelectObjectSchema.optional(), include: ConfigurationOptionIncludeObjectSchema.optional(), where: ConfigurationOptionWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowConfigurationOption.schema.js.map