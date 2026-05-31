export declare const ProductCategory: {
    readonly VPS: "VPS";
    readonly VDS: "VDS";
    readonly WEBHOST: "WEBHOST";
    readonly DISCORD: "DISCORD";
    readonly DDOS_PROT: "DDOS_PROT";
    readonly DEDICATED: "DEDICATED";
    readonly MINECRAFT: "MINECRAFT";
};
export type ProductCategory = (typeof ProductCategory)[keyof typeof ProductCategory];
export declare const BillingPeriod: {
    readonly HOURLY: "HOURLY";
    readonly DAILY: "DAILY";
    readonly MONTHLY: "MONTHLY";
    readonly QUARTERLY: "QUARTERLY";
    readonly SEMIANNUALLY: "SEMIANNUALLY";
    readonly YEARLY: "YEARLY";
};
export type BillingPeriod = (typeof BillingPeriod)[keyof typeof BillingPeriod];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly PAYMENT_FAILED: "PAYMENT_FAILED";
    readonly PAID: "PAID";
    readonly PROCESSING: "PROCESSING";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
    readonly REFUNDED: "REFUNDED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const CouponType: {
    readonly FIXED: "FIXED";
    readonly PERCENT: "PERCENT";
};
export type CouponType = (typeof CouponType)[keyof typeof CouponType];
export declare const PageStatus: {
    readonly PUBLISHED: "PUBLISHED";
    readonly DRAFT: "DRAFT";
};
export type PageStatus = (typeof PageStatus)[keyof typeof PageStatus];
export declare const TicketStatus: {
    readonly OPEN: "OPEN";
    readonly PENDING: "PENDING";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly RESOLVED: "RESOLVED";
    readonly CLOSED: "CLOSED";
};
export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
export declare const TicketPriority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly URGENT: "URGENT";
};
export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority];
export declare const SenderRole: {
    readonly USER: "USER";
    readonly SUPPORT: "SUPPORT";
    readonly ADMIN: "ADMIN";
};
export type SenderRole = (typeof SenderRole)[keyof typeof SenderRole];
export declare const ConfigurationOptionType: {
    readonly SELECT: "SELECT";
    readonly RADIO: "RADIO";
    readonly TEXT: "TEXT";
    readonly NUMBER: "NUMBER";
};
export type ConfigurationOptionType = (typeof ConfigurationOptionType)[keyof typeof ConfigurationOptionType];
//# sourceMappingURL=enums.d.ts.map