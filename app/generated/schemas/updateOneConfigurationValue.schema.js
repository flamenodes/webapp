import * as z from 'zod';
import { ConfigurationValueSelectObjectSchema as ConfigurationValueSelectObjectSchema } from './objects/ConfigurationValueSelect.schema';
import { ConfigurationValueIncludeObjectSchema as ConfigurationValueIncludeObjectSchema } from './objects/ConfigurationValueInclude.schema';
import { ConfigurationValueUpdateInputObjectSchema as ConfigurationValueUpdateInputObjectSchema } from './objects/ConfigurationValueUpdateInput.schema';
import { ConfigurationValueUncheckedUpdateInputObjectSchema as ConfigurationValueUncheckedUpdateInputObjectSchema } from './objects/ConfigurationValueUncheckedUpdateInput.schema';
import { ConfigurationValueWhereUniqueInputObjectSchema as ConfigurationValueWhereUniqueInputObjectSchema } from './objects/ConfigurationValueWhereUniqueInput.schema';
export const ConfigurationValueUpdateOneSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), data: z.union([ConfigurationValueUpdateInputObjectSchema, ConfigurationValueUncheckedUpdateInputObjectSchema]), where: ConfigurationValueWhereUniqueInputObjectSchema }).strict();
export const ConfigurationValueUpdateOneZodSchema = z.object({ select: ConfigurationValueSelectObjectSchema.optional(), include: ConfigurationValueIncludeObjectSchema.optional(), data: z.union([ConfigurationValueUpdateInputObjectSchema, ConfigurationValueUncheckedUpdateInputObjectSchema]), where: ConfigurationValueWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneConfigurationValue.schema.js.map