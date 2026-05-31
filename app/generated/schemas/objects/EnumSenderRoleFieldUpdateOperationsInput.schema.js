import * as z from 'zod';
import { SenderRoleSchema } from '../enums/SenderRole.schema';
const makeSchema = () => z.object({
    set: SenderRoleSchema.optional()
}).strict();
export const EnumSenderRoleFieldUpdateOperationsInputObjectSchema = makeSchema();
export const EnumSenderRoleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
//# sourceMappingURL=EnumSenderRoleFieldUpdateOperationsInput.schema.js.map