import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';
export const StatusNodeFindUniqueSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), where: StatusNodeWhereUniqueInputObjectSchema }).strict();
export const StatusNodeFindUniqueZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), where: StatusNodeWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueStatusNode.schema.js.map