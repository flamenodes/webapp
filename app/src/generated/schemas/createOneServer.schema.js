import * as z from 'zod';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './objects/ServerSelect.schema';
import { ServerIncludeObjectSchema as ServerIncludeObjectSchema } from './objects/ServerInclude.schema';
import { ServerCreateInputObjectSchema as ServerCreateInputObjectSchema } from './objects/ServerCreateInput.schema';
import { ServerUncheckedCreateInputObjectSchema as ServerUncheckedCreateInputObjectSchema } from './objects/ServerUncheckedCreateInput.schema';
export const ServerCreateOneSchema = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), data: z.union([ServerCreateInputObjectSchema, ServerUncheckedCreateInputObjectSchema]) }).strict();
export const ServerCreateOneZodSchema = z.object({ select: ServerSelectObjectSchema.optional(), include: ServerIncludeObjectSchema.optional(), data: z.union([ServerCreateInputObjectSchema, ServerUncheckedCreateInputObjectSchema]) }).strict();
//# sourceMappingURL=createOneServer.schema.js.map