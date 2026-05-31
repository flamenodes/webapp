import * as z from 'zod';
import { ServerCreateManyInputObjectSchema as ServerCreateManyInputObjectSchema } from './objects/ServerCreateManyInput.schema';
export const ServerCreateManySchema = z.object({ data: z.union([ServerCreateManyInputObjectSchema, z.array(ServerCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const ServerCreateManyZodSchema = z.object({ data: z.union([ServerCreateManyInputObjectSchema, z.array(ServerCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyServer.schema.js.map