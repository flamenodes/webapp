import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.ts";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.user`: Exposes CRUD operations for the **User** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Users
  * const users = await prisma.user.findMany()
  * ```
  */
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.session`: Exposes CRUD operations for the **Session** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sessions
      * const sessions = await prisma.session.findMany()
      * ```
      */
    get session(): Prisma.SessionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.account`: Exposes CRUD operations for the **Account** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Accounts
      * const accounts = await prisma.account.findMany()
      * ```
      */
    get account(): Prisma.AccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Verifications
      * const verifications = await prisma.verification.findMany()
      * ```
      */
    get verification(): Prisma.VerificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Discounts
      * const discounts = await prisma.discount.findMany()
      * ```
      */
    get discount(): Prisma.DiscountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.product`: Exposes CRUD operations for the **Product** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Products
      * const products = await prisma.product.findMany()
      * ```
      */
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productBillingOption`: Exposes CRUD operations for the **ProductBillingOption** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductBillingOptions
      * const productBillingOptions = await prisma.productBillingOption.findMany()
      * ```
      */
    get productBillingOption(): Prisma.ProductBillingOptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productCategoryConfig`: Exposes CRUD operations for the **ProductCategoryConfig** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductCategoryConfigs
      * const productCategoryConfigs = await prisma.productCategoryConfig.findMany()
      * ```
      */
    get productCategoryConfig(): Prisma.ProductCategoryConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productFeature`: Exposes CRUD operations for the **ProductFeature** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductFeatures
      * const productFeatures = await prisma.productFeature.findMany()
      * ```
      */
    get productFeature(): Prisma.ProductFeatureDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.coupon`: Exposes CRUD operations for the **Coupon** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Coupons
      * const coupons = await prisma.coupon.findMany()
      * ```
      */
    get coupon(): Prisma.CouponDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Carts
      * const carts = await prisma.cart.findMany()
      * ```
      */
    get cart(): Prisma.CartDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more CartItems
      * const cartItems = await prisma.cartItem.findMany()
      * ```
      */
    get cartItem(): Prisma.CartItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Orders
      * const orders = await prisma.order.findMany()
      * ```
      */
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Invoices
      * const invoices = await prisma.invoice.findMany()
      * ```
      */
    get invoice(): Prisma.InvoiceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderItems
      * const orderItems = await prisma.orderItem.findMany()
      * ```
      */
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.server`: Exposes CRUD operations for the **Server** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Servers
      * const servers = await prisma.server.findMany()
      * ```
      */
    get server(): Prisma.ServerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pageDocument`: Exposes CRUD operations for the **PageDocument** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more PageDocuments
      * const pageDocuments = await prisma.pageDocument.findMany()
      * ```
      */
    get pageDocument(): Prisma.PageDocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ticketCounter`: Exposes CRUD operations for the **TicketCounter** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TicketCounters
      * const ticketCounters = await prisma.ticketCounter.findMany()
      * ```
      */
    get ticketCounter(): Prisma.TicketCounterDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tickets
      * const tickets = await prisma.ticket.findMany()
      * ```
      */
    get ticket(): Prisma.TicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ticketMessage`: Exposes CRUD operations for the **TicketMessage** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TicketMessages
      * const ticketMessages = await prisma.ticketMessage.findMany()
      * ```
      */
    get ticketMessage(): Prisma.TicketMessageDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ticketTagPreset`: Exposes CRUD operations for the **TicketTagPreset** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more TicketTagPresets
      * const ticketTagPresets = await prisma.ticketTagPreset.findMany()
      * ```
      */
    get ticketTagPreset(): Prisma.TicketTagPresetDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.statusNode`: Exposes CRUD operations for the **StatusNode** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more StatusNodes
      * const statusNodes = await prisma.statusNode.findMany()
      * ```
      */
    get statusNode(): Prisma.StatusNodeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.configurationOption`: Exposes CRUD operations for the **ConfigurationOption** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ConfigurationOptions
      * const configurationOptions = await prisma.configurationOption.findMany()
      * ```
      */
    get configurationOption(): Prisma.ConfigurationOptionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.configurationValue`: Exposes CRUD operations for the **ConfigurationValue** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ConfigurationValues
      * const configurationValues = await prisma.configurationValue.findMany()
      * ```
      */
    get configurationValue(): Prisma.ConfigurationValueDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.razorpayConfig`: Exposes CRUD operations for the **RazorpayConfig** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RazorpayConfigs
      * const razorpayConfigs = await prisma.razorpayConfig.findMany()
      * ```
      */
    get razorpayConfig(): Prisma.RazorpayConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map