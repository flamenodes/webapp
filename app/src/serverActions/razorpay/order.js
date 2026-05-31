import { createServerFn } from '@tanstack/react-start';
import { razorpay } from './instance';
import { z } from 'zod';
export const createOrderSchema = z.object({
    amount: z.number().int().positive(),
    currency: z.literal('INR'),
    receipt: z.string().min(1),
    notes: z.record(z.string(), z.string()).optional(),
});
export const createRazorOrderFn = createServerFn({ method: 'POST' })
    .inputValidator(createOrderSchema)
    .handler(async ({ data }) => {
    const res = razorpay.orders.create(data);
    return (res);
});
export const getAllRazorOrderFn = createServerFn({ method: 'GET' }).handler(async () => {
    try {
        const resData = razorpay.orders.all;
        return { resData };
    }
    catch (err) {
        return err;
    }
});
export const getRazorOrderByID = createServerFn({ method: 'GET' })
    .inputValidator(z.object({ id: z.string() }))
    .handler(async ({ data }) => {
    try {
        const resData = await razorpay.orders.fetch(data.id);
        return { resData };
    }
    catch (err) {
        return err;
    }
});
//# sourceMappingURL=order.js.map