import * as z from 'zod';
import { StatusNodeSelectObjectSchema as StatusNodeSelectObjectSchema } from './objects/StatusNodeSelect.schema';
import { StatusNodeCreateManyInputObjectSchema as StatusNodeCreateManyInputObjectSchema } from './objects/StatusNodeCreateManyInput.schema';
export const StatusNodeCreateManyAndReturnSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: z.union([StatusNodeCreateManyInputObjectSchema, z.array(StatusNodeCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const StatusNodeCreateManyAndReturnZodSchema = z.object({ select: StatusNodeSelectObjectSchema.optional(), data: z.union([StatusNodeCreateManyInputObjectSchema, z.array(StatusNodeCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnStatusNode.schema.js.map