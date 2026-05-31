import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeCreateInputObjectSchema as StatusNodeCreateInputObjectSchema } from './objects/StatusNodeCreateInput.schema';
import { StatusNodeUncheckedCreateInputObjectSchema as StatusNodeUncheckedCreateInputObjectSchema } from './objects/StatusNodeUncheckedCreateInput.schema';
export const StatusNodeCreateOneSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: z.union([StatusNodeCreateInputObjectSchema, StatusNodeUncheckedCreateInputObjectSchema]) }).strict();
export const StatusNodeCreateOneZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: z.union([StatusNodeCreateInputObjectSchema, StatusNodeUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneStatusNode.schema.js.map