import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';
export const StatusNodeFindUniqueOrThrowSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), where: StatusNodeWhereUniqueInputObjectSchema }).strict();
export const StatusNodeFindUniqueOrThrowZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), where: StatusNodeWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueOrThrowStatusNode.schema.js.map