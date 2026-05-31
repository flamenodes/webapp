import * as z from 'zod';
export declare const BillingPeriodSchema: z.ZodEnum<{
    HOURLY: "HOURLY";
    DAILY: "DAILY";
    MONTHLY: "MONTHLY";
    QUARTERLY: "QUARTERLY";
    SEMIANNUALLY: "SEMIANNUALLY";
    YEARLY: "YEARLY";
}>;
export type BillingPeriod = z.infer<typeof BillingPeriodSchema>;
//# sourceMappingURL=BillingPeriod.schema.d.ts.map