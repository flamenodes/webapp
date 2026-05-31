import * as z from 'zod';
import { SessionSelectObjectSchema as SessionSelectObjectSchema } from './objects/SessionSelect.schema';
import { SessionCreateManyInputObjectSchema as SessionCreateManyInputObjectSchema } from './objects/SessionCreateManyInput.schema';
export const SessionCreateManyAndReturnSchema = z.object({ select: SessionSelectObjectSchema.optional(), data: z.union([SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const SessionCreateManyAndReturnZodSchema = z.object({ select: SessionSelectObjectSchema.optional(), data: z.union([SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManyAndReturnSession.schema.js.map