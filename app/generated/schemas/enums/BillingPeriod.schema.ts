import * as z from 'zod';

export const BillingPeriodSchema = z.enum(['HOURLY', 'DAILY', 'MONTHLY', 'QUARTERLY', 'SEMIANNUALLY', 'YEARLY', 'CUSTOM'])

export type BillingPeriod = z.infer<typeof BillingPeriodSchema>;