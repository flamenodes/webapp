import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeUpdateManyMutationInputObjectSchema as StatusNodeUpdateManyMutationInputObjectSchema } from './objects/StatusNodeUpdateManyMutationInput.schema';
import { StatusNodeWhereInputObjectSchema as StatusNodeWhereInputObjectSchema } from './objects/StatusNodeWhereInput.schema';
export const StatusNodeUpdateManyAndReturnSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: StatusNodeUpdateManyMutationInputObjectSchema, where: StatusNodeWhereInputObjectSchema.optional() }).strict();
export const StatusNodeUpdateManyAndReturnZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: StatusNodeUpdateManyMutationInputObjectSchema, where: StatusNodeWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyAndReturnStatusNode.schema.js.map