import * as z from 'zod';
import { SessionCreateManyInputObjectSchema as SessionCreateManyInputObjectSchema } from './objects/SessionCreateManyInput.schema';
export const SessionCreateManySchema = z.object({ data: z.union([SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
export const SessionCreateManyZodSchema = z.object({ data: z.union([SessionCreateManyInputObjectSchema, z.array(SessionCreateManyInputObjectSchema)]), skipDuplicates: z.boolean().optional() }).strict();
//# sourceMappingURL=createManySession.schema.js.map