import * as z from 'zod';
import { SessionFindManySchema as SessionFindManySchema } from '../findManySession.schema';
import { AccountFindManySchema as AccountFindManySchema } from '../findManyAccount.schema';
import { ServerFindManySchema as ServerFindManySchema } from '../findManyServer.schema';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';
const makeSchema = () => z.object({
    id: z.boolean().optional(),
    clientId: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    emailVerified: z.boolean().optional(),
    image: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    accounts: z.union([z.boolean(), z.lazy(() => AccountFindManySchema)]).optional(),
    role: z.boolean().optional(),
    banned: z.boolean().optional(),
    banReason: z.boolean().optional(),
    banExpires: z.boolean().optional(),
    username: z.boolean().optional(),
    firstname: z.boolean().optional(),
    lastname: z.boolean().optional(),
    servers: z.union([z.boolean(), z.lazy(() => ServerFindManySchema)]).optional(),
    cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
    orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
    displayUsername: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema = makeSchema();
export const UserSelectObjectZodSchema = makeSchema();
//# sourceMappingURL=UserSelect.schema.js.map