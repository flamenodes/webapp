import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeUpdateInputObjectSchema as StatusNodeUpdateInputObjectSchema } from './objects/StatusNodeUpdateInput.schema';
import { StatusNodeUncheckedUpdateInputObjectSchema as StatusNodeUncheckedUpdateInputObjectSchema } from './objects/StatusNodeUncheckedUpdateInput.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';
export const StatusNodeUpdateOneSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: z.union([StatusNodeUpdateInputObjectSchema, StatusNodeUncheckedUpdateInputObjectSchema]), where: StatusNodeWhereUniqueInputObjectSchema }).strict();
export const StatusNodeUpdateOneZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: z.union([StatusNodeUpdateInputObjectSchema, StatusNodeUncheckedUpdateInputObjectSchema]), where: StatusNodeWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=updateOneStatusNode.schema.js.map