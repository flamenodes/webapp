import * as z from 'zod';
import { ServerSelectObjectSchema as ServerSelectObjectSchema } from './objects/ServerSelect.schema';
import { ServerCreateManyInputObjectSchema as ServerCreateManyInputObjectSchema } from './objects/ServerCreateManyInput.schema';
export const ServerCreateManyAndReturnSchema = z.object({ select: ServerSelectObjectSchema.optional(), data: z.union([ServerCreateManyInputObjectSchema, z.array(ServerCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ServerCreateManyAndReturnZodSchema = z.object({ select: ServerSelectObjectSchema.optional(), data: z.union([ServerCreateManyInputObjectSchema, z.array(ServerCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnServer.schema.js.map