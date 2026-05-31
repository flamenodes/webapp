import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeWhereUniqueInputObjectSchema as StatusNodeWhereUniqueInputObjectSchema } from './objects/StatusNodeWhereUniqueInput.schema';
export const StatusNodeDeleteOneSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), where: StatusNodeWhereUniqueInputObjectSchema }).strict();
export const StatusNodeDeleteOneZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), where: StatusNodeWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=deleteOneStatusNode.schema.js.map