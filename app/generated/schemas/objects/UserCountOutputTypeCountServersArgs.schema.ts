import * as z from 'zod';
import { ServerWhereInputObjectSchema as ServerWhereInputObjectSchema } from './ServerWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ServerWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountServersArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountServersArgsObjectZodSchema = makeSchema();
