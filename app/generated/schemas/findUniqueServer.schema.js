import * as z from 'zod';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './objects/ServerSelect.schema';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './objects/ServerInclude.schema';
import { ServerWhereUniqueInputObjectSchema as ServerWhereUniqueInputObjectSchema } from './objects/ServerWhereUniqueInput.schema';
export const ServerFindUniqueSchema = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), where: ServerWhereUniqueInputObjectSchema }).strict();
export const ServerFindUniqueZodSchema = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), where: ServerWhereUniqueInputObjectSchema }).strict();
//# sourceMappingURL=findUniqueServer.schema.js.map