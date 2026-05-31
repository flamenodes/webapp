import * as z from 'zod';
import { StatusNodeCreateManyInputObjectSchema as StatusNodeCreateManyInputObjectSchema } from './objects/StatusNodeCreateManyInput.schema';
export const StatusNodeCreateManySchema = z.object({ data: z.union([StatusNodeCreateManyInputObjectSchema, z.array(StatusNodeCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const StatusNodeCreateManyZodSchema = z.object({ data: z.union([StatusNodeCreateManyInputObjectSchema, z.array(StatusNodeCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyStatusNode.schema.js.map