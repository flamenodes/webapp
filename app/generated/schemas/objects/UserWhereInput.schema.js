import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { SessionListRelationFilterObjectSchema as SessionListRelationFilterObjectSchema } from './SessionListRelationFilter.schema';
import { AccountListRelationFilterObjectSchema as AccountListRelationFilterObjectSchema } from './AccountListRelationFilter.schema';
import { ServerListRelationFilterObjectSchema as ServerListRelationFilterObjectSchema } from './ServerListRelationFilter.schema';
import { CartNullableScalarRelationFilterObjectSchema as CartNullableScalarRelationFilterObjectSchema } from './CartNullableScalarRelationFilter.schema';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { OrderListRelationFilterObjectSchema as OrderListRelationFilterObjectSchema } from './OrderListRelationFilter.schema';
import { TicketListRelationFilterObjectSchema as TicketListRelationFilterObjectSchema } from './TicketListRelationFilter.schema';
import { TicketMessageListRelationFilterObjectSchema as TicketMessageListRelationFilterObjectSchema } from './TicketMessageListRelationFilter.schema';
import { NotificationListRelationFilterObjectSchema as NotificationListRelationFilterObjectSchema } from './NotificationListRelationFilter.schema';
const userwhereinputSchema = z.object({
    AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
    NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    clientId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    emailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    image: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    role: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    banned: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
    banReason: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    banExpires: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
    username: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    firstname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    lastname: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    pteroUserId: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
    address: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    city: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    zip: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    country: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    displayUsername: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    accounts: z.lazy(() => AccountListRelationFilterObjectSchema).optional(),
    servers: z.lazy(() => ServerListRelationFilterObjectSchema).optional(),
    cart: z.union([z.lazy(() => CartNullableScalarRelationFilterObjectSchema), z.lazy(() => CartWhereInputObjectSchema)]).optional(),
    orders: z.lazy(() => OrderListRelationFilterObjectSchema).optional(),
    tickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional(),
    assignedTickets: z.lazy(() => TicketListRelationFilterObjectSchema).optional(),
    ticketMessages: z.lazy(() => TicketMessageListRelationFilterObjectSchema).optional(),
    notifications: z.lazy(() => NotificationListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema = userwhereinputSchema;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
//# sourceMappingURL=UserWhereInput.schema.js.map