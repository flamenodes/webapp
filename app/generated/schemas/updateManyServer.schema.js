import * as z from 'zod';
import { ServerUpdateManyMutationInputObjectSchema as ServerUpdateManyMutationInputObjectSchema } from './objects/ServerUpdateManyMutationInput.schema';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
export const ServerUpdateManySchema = z.object({ data: ServerUpdateManyMutationInputObjectSchema, where: ServerWhereInputObjectSchema.optional() }).strict();
export const ServerUpdateManyZodSchema = z.object({ data: ServerUpdateManyMutationInputObjectSchema, where: ServerWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=updateManyServer.schema.js.map