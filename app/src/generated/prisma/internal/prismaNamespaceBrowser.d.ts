import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.ts';
export type * from './prismaNamespace.ts';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
    readonly Discount: "Discount";
    readonly Product: "Product";
    readonly ProductBillingOption: "ProductBillingOption";
    readonly ProductCategoryConfig: "ProductCategoryConfig";
    readonly ProductFeature: "ProductFeature";
    readonly Coupon: "Coupon";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly Order: "Order";
    readonly Invoice: "Invoice";
    readonly OrderItem: "OrderItem";
    readonly Server: "Server";
    readonly PageDocument: "PageDocument";
    readonly TicketCounter: "TicketCounter";
    readonly Ticket: "Ticket";
    readonly TicketMessage: "TicketMessage";
    readonly TicketTagPreset: "TicketTagPreset";
    readonly StatusNode: "StatusNode";
    readonly ConfigurationOption: "ConfigurationOption";
    readonly ConfigurationValue: "ConfigurationValue";
    readonly Notification: "Notification";
    readonly RazorpayConfig: "RazorpayConfig";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly clientId: "clientId";
    readonly name: "name";
    readonly email: "email";
    readonly emailVerified: "emailVerified";
    readonly image: "image";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly role: "role";
    readonly banned: "banned";
    readonly banReason: "banReason";
    readonly banExpires: "banExpires";
    readonly username: "username";
    readonly firstname: "firstname";
    readonly lastname: "lastname";
    readonly pteroUserId: "pteroUserId";
    readonly address: "address";
    readonly city: "city";
    readonly zip: "zip";
    readonly country: "country";
    readonly displayUsername: "displayUsername";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
    readonly impersonatedBy: "impersonatedBy";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const DiscountScalarFieldEnum: {
    readonly id: "id";
    readonly label: "label";
    readonly percentage: "percentage";
};
export type DiscountScalarFieldEnum = (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly planName: "planName";
    readonly icon: "icon";
    readonly badge: "badge";
    readonly category: "category";
    readonly price: "price";
    readonly sortOrder: "sortOrder";
    readonly featureCategory: "featureCategory";
    readonly inStock: "inStock";
    readonly discountId: "discountId";
    readonly specs: "specs";
    readonly deployMode: "deployMode";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductBillingOptionScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly billingPeriod: "billingPeriod";
    readonly price: "price";
};
export type ProductBillingOptionScalarFieldEnum = (typeof ProductBillingOptionScalarFieldEnum)[keyof typeof ProductBillingOptionScalarFieldEnum];
export declare const ProductCategoryConfigScalarFieldEnum: {
    readonly id: "id";
    readonly category: "category";
    readonly billingPeriods: "billingPeriods";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductCategoryConfigScalarFieldEnum = (typeof ProductCategoryConfigScalarFieldEnum)[keyof typeof ProductCategoryConfigScalarFieldEnum];
export declare const ProductFeatureScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly label: "label";
    readonly sortOrder: "sortOrder";
};
export type ProductFeatureScalarFieldEnum = (typeof ProductFeatureScalarFieldEnum)[keyof typeof ProductFeatureScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly type: "type";
    readonly amount: "amount";
    readonly description: "description";
    readonly active: "active";
    readonly expiresAt: "expiresAt";
    readonly maxUses: "maxUses";
    readonly usedCount: "usedCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly couponCode: "couponCode";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly id: "id";
    readonly cartId: "cartId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly billingPeriod: "billingPeriod";
    readonly configuration: "configuration";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly status: "status";
    readonly subtotalAmount: "subtotalAmount";
    readonly discountAmount: "discountAmount";
    readonly totalAmount: "totalAmount";
    readonly couponCode: "couponCode";
    readonly deliveryMessage: "deliveryMessage";
    readonly deliveryData: "deliveryData";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly invoiceNumber: "invoiceNumber";
    readonly pdfUrl: "pdfUrl";
    readonly razorpayData: "razorpayData";
    readonly createdAt: "createdAt";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly productName: "productName";
    readonly quantity: "quantity";
    readonly billingPeriod: "billingPeriod";
    readonly unitPrice: "unitPrice";
    readonly totalPrice: "totalPrice";
    readonly specsSnapshot: "specsSnapshot";
    readonly configuration: "configuration";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const ServerScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly orderItemId: "orderItemId";
    readonly name: "name";
    readonly type: "type";
    readonly status: "status";
    readonly ip: "ip";
    readonly port: "port";
    readonly expiresAt: "expiresAt";
    readonly resources: "resources";
    readonly pterodactylData: "pterodactylData";
    readonly suspended: "suspended";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum];
export declare const PageDocumentScalarFieldEnum: {
    readonly id: "id";
    readonly slug: "slug";
    readonly title: "title";
    readonly description: "description";
    readonly content: "content";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PageDocumentScalarFieldEnum = (typeof PageDocumentScalarFieldEnum)[keyof typeof PageDocumentScalarFieldEnum];
export declare const TicketCounterScalarFieldEnum: {
    readonly id: "id";
    readonly seq: "seq";
};
export type TicketCounterScalarFieldEnum = (typeof TicketCounterScalarFieldEnum)[keyof typeof TicketCounterScalarFieldEnum];
export declare const TicketScalarFieldEnum: {
    readonly id: "id";
    readonly ticketId: "ticketId";
    readonly title: "title";
    readonly description: "description";
    readonly status: "status";
    readonly priority: "priority";
    readonly userId: "userId";
    readonly assignedToId: "assignedToId";
    readonly channelName: "channelName";
    readonly tags: "tags";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly closedAt: "closedAt";
};
export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum];
export declare const TicketMessageScalarFieldEnum: {
    readonly id: "id";
    readonly ticketId: "ticketId";
    readonly senderId: "senderId";
    readonly senderRole: "senderRole";
    readonly content: "content";
    readonly attachments: "attachments";
    readonly createdAt: "createdAt";
};
export type TicketMessageScalarFieldEnum = (typeof TicketMessageScalarFieldEnum)[keyof typeof TicketMessageScalarFieldEnum];
export declare const TicketTagPresetScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
};
export type TicketTagPresetScalarFieldEnum = (typeof TicketTagPresetScalarFieldEnum)[keyof typeof TicketTagPresetScalarFieldEnum];
export declare const StatusNodeScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly ip: "ip";
    readonly location: "location";
    readonly type: "type";
    readonly port: "port";
    readonly protocol: "protocol";
    readonly status: "status";
    readonly latency: "latency";
    readonly lastChecked: "lastChecked";
    readonly cpu: "cpu";
    readonly memory: "memory";
    readonly disk: "disk";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type StatusNodeScalarFieldEnum = (typeof StatusNodeScalarFieldEnum)[keyof typeof StatusNodeScalarFieldEnum];
export declare const ConfigurationOptionScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly label: "label";
    readonly description: "description";
    readonly type: "type";
    readonly required: "required";
    readonly category: "category";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ConfigurationOptionScalarFieldEnum = (typeof ConfigurationOptionScalarFieldEnum)[keyof typeof ConfigurationOptionScalarFieldEnum];
export declare const ConfigurationValueScalarFieldEnum: {
    readonly id: "id";
    readonly optionId: "optionId";
    readonly label: "label";
    readonly value: "value";
    readonly description: "description";
    readonly priceModifier: "priceModifier";
    readonly metadata: "metadata";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ConfigurationValueScalarFieldEnum = (typeof ConfigurationValueScalarFieldEnum)[keyof typeof ConfigurationValueScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly type: "type";
    readonly title: "title";
    readonly message: "message";
    readonly read: "read";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const RazorpayConfigScalarFieldEnum: {
    readonly id: "id";
    readonly mode: "mode";
    readonly testKeyId: "testKeyId";
    readonly testKeySecret: "testKeySecret";
    readonly prodKeyId: "prodKeyId";
    readonly prodKeySecret: "prodKeySecret";
    readonly gstin: "gstin";
    readonly companyName: "companyName";
    readonly companyAddress: "companyAddress";
    readonly companyCity: "companyCity";
    readonly companyZip: "companyZip";
    readonly companyCountry: "companyCountry";
    readonly updatedAt: "updatedAt";
    readonly createdAt: "createdAt";
};
export type RazorpayConfigScalarFieldEnum = (typeof RazorpayConfigScalarFieldEnum)[keyof typeof RazorpayConfigScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client/runtime/client").DbNullClass;
    readonly JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
    readonly AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map