import * as z from 'zod';
import { ConfigurationOptionTypeSchema } from '../enums/ConfigurationOptionType.schema';
const makeSchema = () => z.object({
    set: ConfigurationOptionTypeSchema.optional()
}).strict();
export const EnumConfigurationOptionTypeFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumConfigurationOptionTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumConfigurationOptionTypeFieldUpdateOperationsInput.schema.js.map