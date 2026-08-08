import * as z from 'zod';

export const BillingPeriodSchema = z.enum(['MONTHLY', 'QUARTERLY', 'SEMIANNUALLY', 'YEARLY', 'HOURLY', 'DAILY', 'CUSTOM'])

export type BillingPeriod = z.infer<typeof BillingPeriodSchema>;