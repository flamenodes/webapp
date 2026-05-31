import * as z from 'zod';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountServersArgsObjectSchema as UserCountOutputTypeCountServersArgsObjectSchema } from './UserCountOutputTypeCountServersArgs.schema';
import { UserCountOutputTypeCountOrdersArgsObjectSchema as UserCountOutputTypeCountOrdersArgsObjectSchema } from './UserCountOutputTypeCountOrdersArgs.schema';
const makeSchema = () => z.object({
    sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
    servers: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountServersArgsObjectSchema)]).optional(),
    orders: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountOrdersArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema = makeSchema();
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=UserCountOutputTypeSelect.schema.js.map