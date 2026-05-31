import * as z from 'zod';
import { SessionWhereUniqueInputObjectSchema as SessionWhereUniqueInputObjectSchema } from './SessionWhereUniqueInput.schema';
import { SessionUpdateWithoutUserInputObjectSchema as SessionUpdateWithoutUserInputObjectSchema } from './SessionUpdateWithoutUserInput.schema';
import { SessionUncheckedUpdateWithoutUserInputObjectSchema as SessionUncheckedUpdateWithoutUserInputObjectSchema } from './SessionUncheckedUpdateWithoutUserInput.schema';
const makeSchema = () => z.object({
    where: z.lazy(() => SessionWhereUniqueInputObjectSchema),
    data: z.union([z.lazy(() => SessionUpdateWithoutUserInputObjectSchema), z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SessionUpdateWithWhereUniqueWithoutUserInputObjectSchema = makeSchema();
export const SessionUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
//# sourceMappingURL=SessionUpdateWithWhereUniqueWithoutUserInput.schema.js.map