import * as z from 'zod';
// prettier-ignore
export const BillingAddressResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    user: z.unknown(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BillingAddressResultType = z.infer<typeof BillingAddressResultSchema>;
