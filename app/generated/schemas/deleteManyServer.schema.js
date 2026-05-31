import * as z from 'zod';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './objects/ServerWhereInput.schema';
export const ServerDeleteManySchema = z.object({ where: ServerWhereInputObjectSchema.optional() }).strict();
export const ServerDeleteManyZodSchema = z.object({ where: ServerWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManyServer.schema.js.map