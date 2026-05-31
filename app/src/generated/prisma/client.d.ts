import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.ts";
import * as Prisma from "./internal/prismaNamespace.ts";
export * as $Enums from './enums.ts';
export * from "./enums.ts";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model Session
 *
 */
export type Session = Prisma.SessionModel;
/**
 * Model Account
 *
 */
export type Account = Prisma.AccountModel;
/**
 * Model Verification
 *
 */
export type Verification = Prisma.VerificationModel;
/**
 * Model Discount
 *
 */
export type Discount = Prisma.DiscountModel;
/**
 * Model Product
 *
 */
export type Product = Prisma.ProductModel;
/**
 * Model ProductBillingOption
 *
 */
export type ProductBillingOption = Prisma.ProductBillingOptionModel;
/**
 * Model ProductCategoryConfig
 *
 */
export type ProductCategoryConfig = Prisma.ProductCategoryConfigModel;
/**
 * Model ProductFeature
 *
 */
export type ProductFeature = Prisma.ProductFeatureModel;
/**
 * Model Coupon
 *
 */
export type Coupon = Prisma.CouponModel;
/**
 * Model Cart
 *
 */
export type Cart = Prisma.CartModel;
/**
 * Model CartItem
 *
 */
export type CartItem = Prisma.CartItemModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model Invoice
 *
 */
export type Invoice = Prisma.InvoiceModel;
/**
 * Model OrderItem
 *
 */
export type OrderItem = Prisma.OrderItemModel;
/**
 * Model Server
 *
 */
export type Server = Prisma.ServerModel;
/**
 * Model PageDocument
 *
 */
export type PageDocument = Prisma.PageDocumentModel;
/**
 * Model TicketCounter
 *
 */
export type TicketCounter = Prisma.TicketCounterModel;
/**
 * Model Ticket
 *
 */
export type Ticket = Prisma.TicketModel;
/**
 * Model TicketMessage
 *
 */
export type TicketMessage = Prisma.TicketMessageModel;
/**
 * Model TicketTagPreset
 *
 */
export type TicketTagPreset = Prisma.TicketTagPresetModel;
/**
 * Model StatusNode
 *
 */
export type StatusNode = Prisma.StatusNodeModel;
/**
 * Model ConfigurationOption
 *
 */
export type ConfigurationOption = Prisma.ConfigurationOptionModel;
/**
 * Model ConfigurationValue
 *
 */
export type ConfigurationValue = Prisma.ConfigurationValueModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model RazorpayConfig
 *
 */
export type RazorpayConfig = Prisma.RazorpayConfigModel;
//# sourceMappingURL=client.d.ts.map