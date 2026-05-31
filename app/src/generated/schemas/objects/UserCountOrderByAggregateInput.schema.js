import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
const makeSchema = () => z.object({
    id: SortOrderSchema.optional(),
    clientId: SortOrderSchema.optional(),
    name: SortOrderSchema.optional(),
    email: SortOrderSchema.optional(),
    emailVerified: SortOrderSchema.optional(),
    image: SortOrderSchema.optional(),
    createdAt: SortOrderSchema.optional(),
    updatedAt: SortOrderSchema.optional(),
    role: SortOrderSchema.optional(),
    banned: SortOrderSchema.optional(),
    banReason: SortOrderSchema.optional(),
    banExpires: SortOrderSchema.optional(),
    username: SortOrderSchema.optional(),
    firstname: SortOrderSchema.optional(),
    lastname: SortOrderSchema.optional(),
    displayUsername: SortOrderSchema.optional()
}).strict();
export const UserCountOrderByAggregateInputObjectSchema = makeSchema();
export const UserCountOrderByAggregateInputObjectZodSchema = makeSchema();
//# sourceMappingURL=UserCountOrderByAggregateInput.schema.js.map