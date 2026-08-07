import * as z from 'zod';
// prettier-ignore
export const BillingAddressInputSchema = z.object({
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
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date()
}).strict();

export type BillingAddressInputType = z.infer<typeof BillingAddressInputSchema>;
