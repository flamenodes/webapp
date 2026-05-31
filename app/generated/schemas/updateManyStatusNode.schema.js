import * as z from 'zod';
import { StatusNodeUpdateManyMutationInputObjectSchema as StatusNodeUpdateManyMutationInputObjectSchema } from './objects/StatusNodeUpdateManyMutationInput.schema';
import { StatusNodeWhereInputObjectSchema as StatusNodeWhereInputObjectSchema } from './objects/StatusNodeWhereInput.schema';
export const StatusNodeUpdateManySchema = z.object({ data: StatusNodeUpdateManyMutationInputObjectSchema, where: StatusNodeWhereInputObjectSchema.optional() }).strict();
export const StatusNodeUpdateManyZodSchema = z.object({ data: StatusNodeUpdateManyMutationInputObjectSchema, where: StatusNodeWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyStatusNode.schema.js.map