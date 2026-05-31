import * as z from 'zod';
import { SessionWhereInputObjectSchema as SessionWhereInputObjectSchema } from './objects/SessionWhereInput.schema';
export const SessionDeleteManySchema = z.object({ where: SessionWhereInputObjectSchema.optional() }).strict();
export const SessionDeleteManyZodSchema = z.object({ where: SessionWhereInputObjectSchema.optional() }).strict();
//# sourceMappingURL=deleteManySession.schema.js.map