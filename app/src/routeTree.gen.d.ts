import { Route as rootRouteImport } from './routes/__root';
import { Route as StatusRouteImport } from './routes/status';
import { Route as McpRouteImport } from './routes/mcp';
import { Route as ProtectedRouteImport } from './routes/_protected';
import { Route as AuthRouteImport } from './routes/_auth';
import { Route as PricingRouteRouteImport } from './routes/pricing/route';
import { Route as IndexRouteImport } from './routes/index';
import { Route as PricingWebhostRouteImport } from './routes/pricing/webhost';
import { Route as PricingVpsRouteImport } from './routes/pricing/vps';
import { Route as PricingVdsRouteImport } from './routes/pricing/vds';
import { Route as PricingProtectionRouteImport } from './routes/pricing/protection';
import { Route as PricingMinecraftRouteImport } from './routes/pricing/minecraft';
import { Route as PricingDiscordBotRouteImport } from './routes/pricing/discord-bot';
import { Route as PricingDedicatedRouteImport } from './routes/pricing/dedicated';
import { Route as DocsSlugRouteImport } from './routes/docs/$slug';
import { Route as DevTestRouteImport } from './routes/dev/test';
import { Route as ConfigureProductIdRouteImport } from './routes/configure/$productId';
import { Route as CheckoutPaymentRouteImport } from './routes/checkout/payment';
import { Route as BillingSuccessRouteImport } from './routes/billing/success';
import { Route as BillingConfigureRouteImport } from './routes/billing/configure';
import { Route as BillingCartRouteImport } from './routes/billing/cart';
import { Route as AuthSignupRouteImport } from './routes/_auth/signup';
import { Route as AuthLoginRouteImport } from './routes/_auth/login';
import { Route as ProtectedUserRouteRouteImport } from './routes/_protected/user/route';
import { Route as ProtectedAdminRouteRouteImport } from './routes/_protected/admin/route';
import { Route as ApiAuthSplatRouteImport } from './routes/api/auth/$';
import { Route as ProtectedUserTicketsRouteImport } from './routes/_protected/user/tickets';
import { Route as ProtectedUserSettingsRouteImport } from './routes/_protected/user/settings';
import { Route as ProtectedUserServersRouteImport } from './routes/_protected/user/servers';
import { Route as ProtectedUserOrdersRouteImport } from './routes/_protected/user/orders';
import { Route as ProtectedUserInvoicesRouteImport } from './routes/_protected/user/invoices';
import { Route as ProtectedUserDashboardRouteImport } from './routes/_protected/user/dashboard';
import { Route as ProtectedAdminTicketsRouteImport } from './routes/_protected/admin/tickets';
import { Route as ProtectedAdminStatusRouteImport } from './routes/_protected/admin/status';
import { Route as ProtectedAdminSettingsRouteImport } from './routes/_protected/admin/settings';
import { Route as ProtectedAdminServersRouteImport } from './routes/_protected/admin/servers';
import { Route as ProtectedAdminProductsRouteImport } from './routes/_protected/admin/products';
import { Route as ProtectedAdminProductConfigRouteImport } from './routes/_protected/admin/product-config';
import { Route as ProtectedAdminOrdersRouteImport } from './routes/_protected/admin/orders';
import { Route as ProtectedAdminInvoicesRouteImport } from './routes/_protected/admin/invoices';
import { Route as ProtectedAdminDocumentsRouteImport } from './routes/_protected/admin/documents';
import { Route as ProtectedAdminDashboardRouteImport } from './routes/_protected/admin/dashboard';
import { Route as ProtectedAdminCustomersRouteImport } from './routes/_protected/admin/customers';
import { Route as ProtectedAdminConfigurationsRouteImport } from './routes/_protected/admin/configurations';
import { Route as ProtectedAdminDocEditorSlugRouteImport } from './routes/_protected/admin/doc-editor.$slug';
import { Route as ProtectedAdminDocumentsEditorIdRouteImport } from './routes/_protected/admin/documents.editor.$id';
declare const StatusRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/status", "/status", "/status", "/status", undefined, import("@tanstack/router-core").ResolveParams<"/status">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const McpRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/mcp", "/mcp", "/mcp", "/mcp", undefined, import("@tanstack/router-core").ResolveParams<"/mcp">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, {
    POST: ({ request }: import("@tanstack/react-start").RouteMethodHandlerCtx<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/mcp", import("@tanstack/router-core").ResolveParams<"/mcp">, unknown, any>) => Promise<any>;
}>;
declare const ProtectedRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const AuthRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_auth", "/_auth", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_auth", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const PricingRouteRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const IndexRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/", "/", "/", "/", undefined, import("@tanstack/router-core").ResolveParams<"/">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const PricingWebhostRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/webhost", "/pricing/webhost", "/pricing/webhost", "/pricing/webhost", undefined, import("@tanstack/router-core").ResolveParams<"/webhost">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const PricingVpsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/vps", "/pricing/vps", "/pricing/vps", "/pricing/vps", undefined, import("@tanstack/router-core").ResolveParams<"/vps">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const PricingVdsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/vds", "/pricing/vds", "/pricing/vds", "/pricing/vds", undefined, import("@tanstack/router-core").ResolveParams<"/vds">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const PricingProtectionRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/protection", "/pricing/protection", "/pricing/protection", "/pricing/protection", undefined, import("@tanstack/router-core").ResolveParams<"/protection">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const PricingMinecraftRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/minecraft", "/pricing/minecraft", "/pricing/minecraft", "/pricing/minecraft", undefined, import("@tanstack/router-core").ResolveParams<"/minecraft">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const PricingDiscordBotRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/discord-bot", "/pricing/discord-bot", "/pricing/discord-bot", "/pricing/discord-bot", undefined, import("@tanstack/router-core").ResolveParams<"/discord-bot">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const PricingDedicatedRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/dedicated", "/pricing/dedicated", "/pricing/dedicated", "/pricing/dedicated", undefined, import("@tanstack/router-core").ResolveParams<"/dedicated">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const DocsSlugRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/docs/$slug", "/docs/$slug", "/docs/$slug", "/docs/$slug", undefined, import("@tanstack/router-core").ResolveParams<"/docs/$slug">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const DevTestRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/dev/test", "/dev/test", "/dev/test", "/dev/test", undefined, import("@tanstack/router-core").ResolveParams<"/dev/test">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ConfigureProductIdRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/configure/$productId", "/configure/$productId", "/configure/$productId", "/configure/$productId", undefined, import("@tanstack/router-core").ResolveParams<"/configure/$productId">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const CheckoutPaymentRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/checkout/payment", "/checkout/payment", "/checkout/payment", "/checkout/payment", (search: Record<string, unknown>) => {
    orderId: string;
    razorpayOrderId: string;
}, import("@tanstack/router-core").ResolveParams<"/checkout/payment">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const BillingSuccessRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/billing/success", "/billing/success", "/billing/success", "/billing/success", undefined, import("@tanstack/router-core").ResolveParams<"/billing/success">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const BillingConfigureRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/billing/configure", "/billing/configure", "/billing/configure", "/billing/configure", undefined, import("@tanstack/router-core").ResolveParams<"/billing/configure">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const BillingCartRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/billing/cart", "/billing/cart", "/billing/cart", "/billing/cart", undefined, import("@tanstack/router-core").ResolveParams<"/billing/cart">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const AuthSignupRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_auth", "/_auth", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_auth", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/signup", "/signup", "/_auth/signup", "/_auth/signup", undefined, import("@tanstack/router-core").ResolveParams<"/signup">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const AuthLoginRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_auth", "/_auth", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_auth", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/login", "/login", "/_auth/login", "/_auth/login", undefined, import("@tanstack/router-core").ResolveParams<"/login">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedUserRouteRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/user", "/user", "/_protected/user", "/_protected/user", undefined, import("@tanstack/router-core").ResolveParams<"/user">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminRouteRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ApiAuthSplatRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/api/auth/$", "/api/auth/$", "/api/auth/$", "/api/auth/$", undefined, import("@tanstack/router-core").ResolveParams<"/api/auth/$">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, {
    GET: ({ request }: import("@tanstack/react-start").RouteMethodHandlerCtx<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/api/auth/$", import("@tanstack/router-core").ResolveParams<"/api/auth/$">, unknown, any>) => any;
    POST: ({ request }: import("@tanstack/react-start").RouteMethodHandlerCtx<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/api/auth/$", import("@tanstack/router-core").ResolveParams<"/api/auth/$">, unknown, any>) => any;
}>;
declare const ProtectedUserTicketsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/user", "/user", "/_protected/user", "/_protected/user", undefined, import("@tanstack/router-core").ResolveParams<"/user">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/tickets", "/user/tickets", "/_protected/user/tickets", "/_protected/user/tickets", import("zod").ZodObject<{
    ticket: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, import("@tanstack/router-core").ResolveParams<"/tickets">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedUserSettingsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/user", "/user", "/_protected/user", "/_protected/user", undefined, import("@tanstack/router-core").ResolveParams<"/user">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/settings", "/user/settings", "/_protected/user/settings", "/_protected/user/settings", undefined, import("@tanstack/router-core").ResolveParams<"/settings">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedUserServersRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/user", "/user", "/_protected/user", "/_protected/user", undefined, import("@tanstack/router-core").ResolveParams<"/user">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/servers", "/user/servers", "/_protected/user/servers", "/_protected/user/servers", undefined, import("@tanstack/router-core").ResolveParams<"/servers">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedUserOrdersRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/user", "/user", "/_protected/user", "/_protected/user", undefined, import("@tanstack/router-core").ResolveParams<"/user">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/orders", "/user/orders", "/_protected/user/orders", "/_protected/user/orders", undefined, import("@tanstack/router-core").ResolveParams<"/orders">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedUserInvoicesRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/user", "/user", "/_protected/user", "/_protected/user", undefined, import("@tanstack/router-core").ResolveParams<"/user">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/invoices", "/user/invoices", "/_protected/user/invoices", "/_protected/user/invoices", undefined, import("@tanstack/router-core").ResolveParams<"/invoices">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedUserDashboardRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/user", "/user", "/_protected/user", "/_protected/user", undefined, import("@tanstack/router-core").ResolveParams<"/user">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/dashboard", "/user/dashboard", "/_protected/user/dashboard", "/_protected/user/dashboard", (search: Record<string, unknown>) => {
    paymentSuccess: boolean | undefined;
    orderId: string | undefined;
}, import("@tanstack/router-core").ResolveParams<"/dashboard">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminTicketsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/tickets", "/admin/tickets", "/_protected/admin/tickets", "/_protected/admin/tickets", import("zod").ZodObject<{
    ticket: import("zod").ZodOptional<import("zod").ZodString>;
}, import("zod/v4/core").$strip>, import("@tanstack/router-core").ResolveParams<"/tickets">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminStatusRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/status", "/admin/status", "/_protected/admin/status", "/_protected/admin/status", undefined, import("@tanstack/router-core").ResolveParams<"/status">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminSettingsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/settings", "/admin/settings", "/_protected/admin/settings", "/_protected/admin/settings", undefined, import("@tanstack/router-core").ResolveParams<"/settings">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminServersRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/servers", "/admin/servers", "/_protected/admin/servers", "/_protected/admin/servers", undefined, import("@tanstack/router-core").ResolveParams<"/servers">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminProductsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/products", "/admin/products", "/_protected/admin/products", "/_protected/admin/products", undefined, import("@tanstack/router-core").ResolveParams<"/products">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminProductConfigRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/product-config", "/admin/product-config", "/_protected/admin/product-config", "/_protected/admin/product-config", undefined, import("@tanstack/router-core").ResolveParams<"/product-config">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminOrdersRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/orders", "/admin/orders", "/_protected/admin/orders", "/_protected/admin/orders", undefined, import("@tanstack/router-core").ResolveParams<"/orders">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminInvoicesRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/invoices", "/admin/invoices", "/_protected/admin/invoices", "/_protected/admin/invoices", undefined, import("@tanstack/router-core").ResolveParams<"/invoices">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminDocumentsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/documents", "/admin/documents", "/_protected/admin/documents", "/_protected/admin/documents", (search: Record<string, unknown>) => {
    view: string;
}, import("@tanstack/router-core").ResolveParams<"/documents">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminDashboardRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/dashboard", "/admin/dashboard", "/_protected/admin/dashboard", "/_protected/admin/dashboard", undefined, import("@tanstack/router-core").ResolveParams<"/dashboard">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminCustomersRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/customers", "/admin/customers", "/_protected/admin/customers", "/_protected/admin/customers", undefined, import("@tanstack/router-core").ResolveParams<"/customers">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminConfigurationsRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/configurations", "/admin/configurations", "/_protected/admin/configurations", "/_protected/admin/configurations", undefined, import("@tanstack/router-core").ResolveParams<"/configurations">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminDocEditorSlugRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/doc-editor/$slug", "/admin/doc-editor/$slug", "/_protected/admin/doc-editor/$slug", "/_protected/admin/doc-editor/$slug", undefined, import("@tanstack/router-core").ResolveParams<"/doc-editor/$slug">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
declare const ProtectedAdminDocumentsEditorIdRoute: import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/router-core").Route<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<Register, import("@tanstack/react-router").RootRoute<Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/documents", "/admin/documents", "/_protected/admin/documents", "/_protected/admin/documents", (search: Record<string, unknown>) => {
    view: string;
}, import("@tanstack/router-core").ResolveParams<"/documents">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/editor/$id", "/admin/documents/editor/$id", "/_protected/admin/documents/editor/$id", "/_protected/admin/documents/editor/$id", undefined, import("@tanstack/router-core").ResolveParams<"/editor/$id">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>;
export interface FileRoutesByFullPath {
    '/': typeof IndexRoute;
    '/pricing': typeof PricingRouteRouteWithChildren;
    '/mcp': typeof McpRoute;
    '/status': typeof StatusRoute;
    '/admin': typeof ProtectedAdminRouteRouteWithChildren;
    '/user': typeof ProtectedUserRouteRouteWithChildren;
    '/login': typeof AuthLoginRoute;
    '/signup': typeof AuthSignupRoute;
    '/billing/cart': typeof BillingCartRoute;
    '/billing/configure': typeof BillingConfigureRoute;
    '/billing/success': typeof BillingSuccessRoute;
    '/checkout/payment': typeof CheckoutPaymentRoute;
    '/configure/$productId': typeof ConfigureProductIdRoute;
    '/dev/test': typeof DevTestRoute;
    '/docs/$slug': typeof DocsSlugRoute;
    '/pricing/dedicated': typeof PricingDedicatedRoute;
    '/pricing/discord-bot': typeof PricingDiscordBotRoute;
    '/pricing/minecraft': typeof PricingMinecraftRoute;
    '/pricing/protection': typeof PricingProtectionRoute;
    '/pricing/vds': typeof PricingVdsRoute;
    '/pricing/vps': typeof PricingVpsRoute;
    '/pricing/webhost': typeof PricingWebhostRoute;
    '/admin/configurations': typeof ProtectedAdminConfigurationsRoute;
    '/admin/customers': typeof ProtectedAdminCustomersRoute;
    '/admin/dashboard': typeof ProtectedAdminDashboardRoute;
    '/admin/documents': typeof ProtectedAdminDocumentsRouteWithChildren;
    '/admin/invoices': typeof ProtectedAdminInvoicesRoute;
    '/admin/orders': typeof ProtectedAdminOrdersRoute;
    '/admin/product-config': typeof ProtectedAdminProductConfigRoute;
    '/admin/products': typeof ProtectedAdminProductsRoute;
    '/admin/servers': typeof ProtectedAdminServersRoute;
    '/admin/settings': typeof ProtectedAdminSettingsRoute;
    '/admin/status': typeof ProtectedAdminStatusRoute;
    '/admin/tickets': typeof ProtectedAdminTicketsRoute;
    '/user/dashboard': typeof ProtectedUserDashboardRoute;
    '/user/invoices': typeof ProtectedUserInvoicesRoute;
    '/user/orders': typeof ProtectedUserOrdersRoute;
    '/user/servers': typeof ProtectedUserServersRoute;
    '/user/settings': typeof ProtectedUserSettingsRoute;
    '/user/tickets': typeof ProtectedUserTicketsRoute;
    '/api/auth/$': typeof ApiAuthSplatRoute;
    '/admin/doc-editor/$slug': typeof ProtectedAdminDocEditorSlugRoute;
    '/admin/documents/editor/$id': typeof ProtectedAdminDocumentsEditorIdRoute;
}
export interface FileRoutesByTo {
    '/': typeof IndexRoute;
    '/pricing': typeof PricingRouteRouteWithChildren;
    '/mcp': typeof McpRoute;
    '/status': typeof StatusRoute;
    '/admin': typeof ProtectedAdminRouteRouteWithChildren;
    '/user': typeof ProtectedUserRouteRouteWithChildren;
    '/login': typeof AuthLoginRoute;
    '/signup': typeof AuthSignupRoute;
    '/billing/cart': typeof BillingCartRoute;
    '/billing/configure': typeof BillingConfigureRoute;
    '/billing/success': typeof BillingSuccessRoute;
    '/checkout/payment': typeof CheckoutPaymentRoute;
    '/configure/$productId': typeof ConfigureProductIdRoute;
    '/dev/test': typeof DevTestRoute;
    '/docs/$slug': typeof DocsSlugRoute;
    '/pricing/dedicated': typeof PricingDedicatedRoute;
    '/pricing/discord-bot': typeof PricingDiscordBotRoute;
    '/pricing/minecraft': typeof PricingMinecraftRoute;
    '/pricing/protection': typeof PricingProtectionRoute;
    '/pricing/vds': typeof PricingVdsRoute;
    '/pricing/vps': typeof PricingVpsRoute;
    '/pricing/webhost': typeof PricingWebhostRoute;
    '/admin/configurations': typeof ProtectedAdminConfigurationsRoute;
    '/admin/customers': typeof ProtectedAdminCustomersRoute;
    '/admin/dashboard': typeof ProtectedAdminDashboardRoute;
    '/admin/documents': typeof ProtectedAdminDocumentsRouteWithChildren;
    '/admin/invoices': typeof ProtectedAdminInvoicesRoute;
    '/admin/orders': typeof ProtectedAdminOrdersRoute;
    '/admin/product-config': typeof ProtectedAdminProductConfigRoute;
    '/admin/products': typeof ProtectedAdminProductsRoute;
    '/admin/servers': typeof ProtectedAdminServersRoute;
    '/admin/settings': typeof ProtectedAdminSettingsRoute;
    '/admin/status': typeof ProtectedAdminStatusRoute;
    '/admin/tickets': typeof ProtectedAdminTicketsRoute;
    '/user/dashboard': typeof ProtectedUserDashboardRoute;
    '/user/invoices': typeof ProtectedUserInvoicesRoute;
    '/user/orders': typeof ProtectedUserOrdersRoute;
    '/user/servers': typeof ProtectedUserServersRoute;
    '/user/settings': typeof ProtectedUserSettingsRoute;
    '/user/tickets': typeof ProtectedUserTicketsRoute;
    '/api/auth/$': typeof ApiAuthSplatRoute;
    '/admin/doc-editor/$slug': typeof ProtectedAdminDocEditorSlugRoute;
    '/admin/documents/editor/$id': typeof ProtectedAdminDocumentsEditorIdRoute;
}
export interface FileRoutesById {
    __root__: typeof rootRouteImport;
    '/': typeof IndexRoute;
    '/pricing': typeof PricingRouteRouteWithChildren;
    '/_auth': typeof AuthRouteWithChildren;
    '/_protected': typeof ProtectedRouteWithChildren;
    '/mcp': typeof McpRoute;
    '/status': typeof StatusRoute;
    '/_protected/admin': typeof ProtectedAdminRouteRouteWithChildren;
    '/_protected/user': typeof ProtectedUserRouteRouteWithChildren;
    '/_auth/login': typeof AuthLoginRoute;
    '/_auth/signup': typeof AuthSignupRoute;
    '/billing/cart': typeof BillingCartRoute;
    '/billing/configure': typeof BillingConfigureRoute;
    '/billing/success': typeof BillingSuccessRoute;
    '/checkout/payment': typeof CheckoutPaymentRoute;
    '/configure/$productId': typeof ConfigureProductIdRoute;
    '/dev/test': typeof DevTestRoute;
    '/docs/$slug': typeof DocsSlugRoute;
    '/pricing/dedicated': typeof PricingDedicatedRoute;
    '/pricing/discord-bot': typeof PricingDiscordBotRoute;
    '/pricing/minecraft': typeof PricingMinecraftRoute;
    '/pricing/protection': typeof PricingProtectionRoute;
    '/pricing/vds': typeof PricingVdsRoute;
    '/pricing/vps': typeof PricingVpsRoute;
    '/pricing/webhost': typeof PricingWebhostRoute;
    '/_protected/admin/configurations': typeof ProtectedAdminConfigurationsRoute;
    '/_protected/admin/customers': typeof ProtectedAdminCustomersRoute;
    '/_protected/admin/dashboard': typeof ProtectedAdminDashboardRoute;
    '/_protected/admin/documents': typeof ProtectedAdminDocumentsRouteWithChildren;
    '/_protected/admin/invoices': typeof ProtectedAdminInvoicesRoute;
    '/_protected/admin/orders': typeof ProtectedAdminOrdersRoute;
    '/_protected/admin/product-config': typeof ProtectedAdminProductConfigRoute;
    '/_protected/admin/products': typeof ProtectedAdminProductsRoute;
    '/_protected/admin/servers': typeof ProtectedAdminServersRoute;
    '/_protected/admin/settings': typeof ProtectedAdminSettingsRoute;
    '/_protected/admin/status': typeof ProtectedAdminStatusRoute;
    '/_protected/admin/tickets': typeof ProtectedAdminTicketsRoute;
    '/_protected/user/dashboard': typeof ProtectedUserDashboardRoute;
    '/_protected/user/invoices': typeof ProtectedUserInvoicesRoute;
    '/_protected/user/orders': typeof ProtectedUserOrdersRoute;
    '/_protected/user/servers': typeof ProtectedUserServersRoute;
    '/_protected/user/settings': typeof ProtectedUserSettingsRoute;
    '/_protected/user/tickets': typeof ProtectedUserTicketsRoute;
    '/api/auth/$': typeof ApiAuthSplatRoute;
    '/_protected/admin/doc-editor/$slug': typeof ProtectedAdminDocEditorSlugRoute;
    '/_protected/admin/documents/editor/$id': typeof ProtectedAdminDocumentsEditorIdRoute;
}
export interface FileRouteTypes {
    fileRoutesByFullPath: FileRoutesByFullPath;
    fullPaths: '/' | '/pricing' | '/mcp' | '/status' | '/admin' | '/user' | '/login' | '/signup' | '/billing/cart' | '/billing/configure' | '/billing/success' | '/checkout/payment' | '/configure/$productId' | '/dev/test' | '/docs/$slug' | '/pricing/dedicated' | '/pricing/discord-bot' | '/pricing/minecraft' | '/pricing/protection' | '/pricing/vds' | '/pricing/vps' | '/pricing/webhost' | '/admin/configurations' | '/admin/customers' | '/admin/dashboard' | '/admin/documents' | '/admin/invoices' | '/admin/orders' | '/admin/product-config' | '/admin/products' | '/admin/servers' | '/admin/settings' | '/admin/status' | '/admin/tickets' | '/user/dashboard' | '/user/invoices' | '/user/orders' | '/user/servers' | '/user/settings' | '/user/tickets' | '/api/auth/$' | '/admin/doc-editor/$slug' | '/admin/documents/editor/$id';
    fileRoutesByTo: FileRoutesByTo;
    to: '/' | '/pricing' | '/mcp' | '/status' | '/admin' | '/user' | '/login' | '/signup' | '/billing/cart' | '/billing/configure' | '/billing/success' | '/checkout/payment' | '/configure/$productId' | '/dev/test' | '/docs/$slug' | '/pricing/dedicated' | '/pricing/discord-bot' | '/pricing/minecraft' | '/pricing/protection' | '/pricing/vds' | '/pricing/vps' | '/pricing/webhost' | '/admin/configurations' | '/admin/customers' | '/admin/dashboard' | '/admin/documents' | '/admin/invoices' | '/admin/orders' | '/admin/product-config' | '/admin/products' | '/admin/servers' | '/admin/settings' | '/admin/status' | '/admin/tickets' | '/user/dashboard' | '/user/invoices' | '/user/orders' | '/user/servers' | '/user/settings' | '/user/tickets' | '/api/auth/$' | '/admin/doc-editor/$slug' | '/admin/documents/editor/$id';
    id: '__root__' | '/' | '/pricing' | '/_auth' | '/_protected' | '/mcp' | '/status' | '/_protected/admin' | '/_protected/user' | '/_auth/login' | '/_auth/signup' | '/billing/cart' | '/billing/configure' | '/billing/success' | '/checkout/payment' | '/configure/$productId' | '/dev/test' | '/docs/$slug' | '/pricing/dedicated' | '/pricing/discord-bot' | '/pricing/minecraft' | '/pricing/protection' | '/pricing/vds' | '/pricing/vps' | '/pricing/webhost' | '/_protected/admin/configurations' | '/_protected/admin/customers' | '/_protected/admin/dashboard' | '/_protected/admin/documents' | '/_protected/admin/invoices' | '/_protected/admin/orders' | '/_protected/admin/product-config' | '/_protected/admin/products' | '/_protected/admin/servers' | '/_protected/admin/settings' | '/_protected/admin/status' | '/_protected/admin/tickets' | '/_protected/user/dashboard' | '/_protected/user/invoices' | '/_protected/user/orders' | '/_protected/user/servers' | '/_protected/user/settings' | '/_protected/user/tickets' | '/api/auth/$' | '/_protected/admin/doc-editor/$slug' | '/_protected/admin/documents/editor/$id';
    fileRoutesById: FileRoutesById;
}
export interface RootRouteChildren {
    IndexRoute: typeof IndexRoute;
    PricingRouteRoute: typeof PricingRouteRouteWithChildren;
    AuthRoute: typeof AuthRouteWithChildren;
    ProtectedRoute: typeof ProtectedRouteWithChildren;
    McpRoute: typeof McpRoute;
    StatusRoute: typeof StatusRoute;
    BillingCartRoute: typeof BillingCartRoute;
    BillingConfigureRoute: typeof BillingConfigureRoute;
    BillingSuccessRoute: typeof BillingSuccessRoute;
    CheckoutPaymentRoute: typeof CheckoutPaymentRoute;
    ConfigureProductIdRoute: typeof ConfigureProductIdRoute;
    DevTestRoute: typeof DevTestRoute;
    DocsSlugRoute: typeof DocsSlugRoute;
    ApiAuthSplatRoute: typeof ApiAuthSplatRoute;
}
declare module '@tanstack/react-router' {
    interface FileRoutesByPath {
        '/status': {
            id: '/status';
            path: '/status';
            fullPath: '/status';
            preLoaderRoute: typeof StatusRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/mcp': {
            id: '/mcp';
            path: '/mcp';
            fullPath: '/mcp';
            preLoaderRoute: typeof McpRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/_protected': {
            id: '/_protected';
            path: '';
            fullPath: '/';
            preLoaderRoute: typeof ProtectedRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/_auth': {
            id: '/_auth';
            path: '';
            fullPath: '/';
            preLoaderRoute: typeof AuthRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/pricing': {
            id: '/pricing';
            path: '/pricing';
            fullPath: '/pricing';
            preLoaderRoute: typeof PricingRouteRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/': {
            id: '/';
            path: '/';
            fullPath: '/';
            preLoaderRoute: typeof IndexRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/pricing/webhost': {
            id: '/pricing/webhost';
            path: '/webhost';
            fullPath: '/pricing/webhost';
            preLoaderRoute: typeof PricingWebhostRouteImport;
            parentRoute: typeof PricingRouteRoute;
        };
        '/pricing/vps': {
            id: '/pricing/vps';
            path: '/vps';
            fullPath: '/pricing/vps';
            preLoaderRoute: typeof PricingVpsRouteImport;
            parentRoute: typeof PricingRouteRoute;
        };
        '/pricing/vds': {
            id: '/pricing/vds';
            path: '/vds';
            fullPath: '/pricing/vds';
            preLoaderRoute: typeof PricingVdsRouteImport;
            parentRoute: typeof PricingRouteRoute;
        };
        '/pricing/protection': {
            id: '/pricing/protection';
            path: '/protection';
            fullPath: '/pricing/protection';
            preLoaderRoute: typeof PricingProtectionRouteImport;
            parentRoute: typeof PricingRouteRoute;
        };
        '/pricing/minecraft': {
            id: '/pricing/minecraft';
            path: '/minecraft';
            fullPath: '/pricing/minecraft';
            preLoaderRoute: typeof PricingMinecraftRouteImport;
            parentRoute: typeof PricingRouteRoute;
        };
        '/pricing/discord-bot': {
            id: '/pricing/discord-bot';
            path: '/discord-bot';
            fullPath: '/pricing/discord-bot';
            preLoaderRoute: typeof PricingDiscordBotRouteImport;
            parentRoute: typeof PricingRouteRoute;
        };
        '/pricing/dedicated': {
            id: '/pricing/dedicated';
            path: '/dedicated';
            fullPath: '/pricing/dedicated';
            preLoaderRoute: typeof PricingDedicatedRouteImport;
            parentRoute: typeof PricingRouteRoute;
        };
        '/docs/$slug': {
            id: '/docs/$slug';
            path: '/docs/$slug';
            fullPath: '/docs/$slug';
            preLoaderRoute: typeof DocsSlugRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/dev/test': {
            id: '/dev/test';
            path: '/dev/test';
            fullPath: '/dev/test';
            preLoaderRoute: typeof DevTestRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/configure/$productId': {
            id: '/configure/$productId';
            path: '/configure/$productId';
            fullPath: '/configure/$productId';
            preLoaderRoute: typeof ConfigureProductIdRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/checkout/payment': {
            id: '/checkout/payment';
            path: '/checkout/payment';
            fullPath: '/checkout/payment';
            preLoaderRoute: typeof CheckoutPaymentRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/billing/success': {
            id: '/billing/success';
            path: '/billing/success';
            fullPath: '/billing/success';
            preLoaderRoute: typeof BillingSuccessRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/billing/configure': {
            id: '/billing/configure';
            path: '/billing/configure';
            fullPath: '/billing/configure';
            preLoaderRoute: typeof BillingConfigureRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/billing/cart': {
            id: '/billing/cart';
            path: '/billing/cart';
            fullPath: '/billing/cart';
            preLoaderRoute: typeof BillingCartRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/_auth/signup': {
            id: '/_auth/signup';
            path: '/signup';
            fullPath: '/signup';
            preLoaderRoute: typeof AuthSignupRouteImport;
            parentRoute: typeof AuthRoute;
        };
        '/_auth/login': {
            id: '/_auth/login';
            path: '/login';
            fullPath: '/login';
            preLoaderRoute: typeof AuthLoginRouteImport;
            parentRoute: typeof AuthRoute;
        };
        '/_protected/user': {
            id: '/_protected/user';
            path: '/user';
            fullPath: '/user';
            preLoaderRoute: typeof ProtectedUserRouteRouteImport;
            parentRoute: typeof ProtectedRoute;
        };
        '/_protected/admin': {
            id: '/_protected/admin';
            path: '/admin';
            fullPath: '/admin';
            preLoaderRoute: typeof ProtectedAdminRouteRouteImport;
            parentRoute: typeof ProtectedRoute;
        };
        '/api/auth/$': {
            id: '/api/auth/$';
            path: '/api/auth/$';
            fullPath: '/api/auth/$';
            preLoaderRoute: typeof ApiAuthSplatRouteImport;
            parentRoute: typeof rootRouteImport;
        };
        '/_protected/user/tickets': {
            id: '/_protected/user/tickets';
            path: '/tickets';
            fullPath: '/user/tickets';
            preLoaderRoute: typeof ProtectedUserTicketsRouteImport;
            parentRoute: typeof ProtectedUserRouteRoute;
        };
        '/_protected/user/settings': {
            id: '/_protected/user/settings';
            path: '/settings';
            fullPath: '/user/settings';
            preLoaderRoute: typeof ProtectedUserSettingsRouteImport;
            parentRoute: typeof ProtectedUserRouteRoute;
        };
        '/_protected/user/servers': {
            id: '/_protected/user/servers';
            path: '/servers';
            fullPath: '/user/servers';
            preLoaderRoute: typeof ProtectedUserServersRouteImport;
            parentRoute: typeof ProtectedUserRouteRoute;
        };
        '/_protected/user/orders': {
            id: '/_protected/user/orders';
            path: '/orders';
            fullPath: '/user/orders';
            preLoaderRoute: typeof ProtectedUserOrdersRouteImport;
            parentRoute: typeof ProtectedUserRouteRoute;
        };
        '/_protected/user/invoices': {
            id: '/_protected/user/invoices';
            path: '/invoices';
            fullPath: '/user/invoices';
            preLoaderRoute: typeof ProtectedUserInvoicesRouteImport;
            parentRoute: typeof ProtectedUserRouteRoute;
        };
        '/_protected/user/dashboard': {
            id: '/_protected/user/dashboard';
            path: '/dashboard';
            fullPath: '/user/dashboard';
            preLoaderRoute: typeof ProtectedUserDashboardRouteImport;
            parentRoute: typeof ProtectedUserRouteRoute;
        };
        '/_protected/admin/tickets': {
            id: '/_protected/admin/tickets';
            path: '/tickets';
            fullPath: '/admin/tickets';
            preLoaderRoute: typeof ProtectedAdminTicketsRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/status': {
            id: '/_protected/admin/status';
            path: '/status';
            fullPath: '/admin/status';
            preLoaderRoute: typeof ProtectedAdminStatusRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/settings': {
            id: '/_protected/admin/settings';
            path: '/settings';
            fullPath: '/admin/settings';
            preLoaderRoute: typeof ProtectedAdminSettingsRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/servers': {
            id: '/_protected/admin/servers';
            path: '/servers';
            fullPath: '/admin/servers';
            preLoaderRoute: typeof ProtectedAdminServersRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/products': {
            id: '/_protected/admin/products';
            path: '/products';
            fullPath: '/admin/products';
            preLoaderRoute: typeof ProtectedAdminProductsRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/product-config': {
            id: '/_protected/admin/product-config';
            path: '/product-config';
            fullPath: '/admin/product-config';
            preLoaderRoute: typeof ProtectedAdminProductConfigRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/orders': {
            id: '/_protected/admin/orders';
            path: '/orders';
            fullPath: '/admin/orders';
            preLoaderRoute: typeof ProtectedAdminOrdersRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/invoices': {
            id: '/_protected/admin/invoices';
            path: '/invoices';
            fullPath: '/admin/invoices';
            preLoaderRoute: typeof ProtectedAdminInvoicesRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/documents': {
            id: '/_protected/admin/documents';
            path: '/documents';
            fullPath: '/admin/documents';
            preLoaderRoute: typeof ProtectedAdminDocumentsRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/dashboard': {
            id: '/_protected/admin/dashboard';
            path: '/dashboard';
            fullPath: '/admin/dashboard';
            preLoaderRoute: typeof ProtectedAdminDashboardRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/customers': {
            id: '/_protected/admin/customers';
            path: '/customers';
            fullPath: '/admin/customers';
            preLoaderRoute: typeof ProtectedAdminCustomersRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/configurations': {
            id: '/_protected/admin/configurations';
            path: '/configurations';
            fullPath: '/admin/configurations';
            preLoaderRoute: typeof ProtectedAdminConfigurationsRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/doc-editor/$slug': {
            id: '/_protected/admin/doc-editor/$slug';
            path: '/doc-editor/$slug';
            fullPath: '/admin/doc-editor/$slug';
            preLoaderRoute: typeof ProtectedAdminDocEditorSlugRouteImport;
            parentRoute: typeof ProtectedAdminRouteRoute;
        };
        '/_protected/admin/documents/editor/$id': {
            id: '/_protected/admin/documents/editor/$id';
            path: '/editor/$id';
            fullPath: '/admin/documents/editor/$id';
            preLoaderRoute: typeof ProtectedAdminDocumentsEditorIdRouteImport;
            parentRoute: typeof ProtectedAdminDocumentsRoute;
        };
    }
}
interface PricingRouteRouteChildren {
    PricingDedicatedRoute: typeof PricingDedicatedRoute;
    PricingDiscordBotRoute: typeof PricingDiscordBotRoute;
    PricingMinecraftRoute: typeof PricingMinecraftRoute;
    PricingProtectionRoute: typeof PricingProtectionRoute;
    PricingVdsRoute: typeof PricingVdsRoute;
    PricingVpsRoute: typeof PricingVpsRoute;
    PricingWebhostRoute: typeof PricingWebhostRoute;
}
declare const PricingRouteRouteChildren: PricingRouteRouteChildren;
declare const PricingRouteRouteWithChildren: import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/pricing", "/pricing", "/pricing", "/pricing", undefined, import("@tanstack/router-core").ResolveParams<"/pricing">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, PricingRouteRouteChildren, unknown, unknown, unknown, undefined>;
interface AuthRouteChildren {
    AuthLoginRoute: typeof AuthLoginRoute;
    AuthSignupRoute: typeof AuthSignupRoute;
}
declare const AuthRouteChildren: AuthRouteChildren;
declare const AuthRouteWithChildren: import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_auth", "/_auth", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_auth", unknown, undefined>) => Promise<void>, {}, undefined, AuthRouteChildren, unknown, unknown, unknown, undefined>;
interface ProtectedAdminDocumentsRouteChildren {
    ProtectedAdminDocumentsEditorIdRoute: typeof ProtectedAdminDocumentsEditorIdRoute;
}
declare const ProtectedAdminDocumentsRouteChildren: ProtectedAdminDocumentsRouteChildren;
declare const ProtectedAdminDocumentsRouteWithChildren: import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/documents", "/admin/documents", "/_protected/admin/documents", "/_protected/admin/documents", (search: Record<string, unknown>) => {
    view: string;
}, import("@tanstack/router-core").ResolveParams<"/documents">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, ProtectedAdminDocumentsRouteChildren, unknown, unknown, unknown, undefined>;
interface ProtectedAdminRouteRouteChildren {
    ProtectedAdminConfigurationsRoute: typeof ProtectedAdminConfigurationsRoute;
    ProtectedAdminCustomersRoute: typeof ProtectedAdminCustomersRoute;
    ProtectedAdminDashboardRoute: typeof ProtectedAdminDashboardRoute;
    ProtectedAdminDocumentsRoute: typeof ProtectedAdminDocumentsRouteWithChildren;
    ProtectedAdminInvoicesRoute: typeof ProtectedAdminInvoicesRoute;
    ProtectedAdminOrdersRoute: typeof ProtectedAdminOrdersRoute;
    ProtectedAdminProductConfigRoute: typeof ProtectedAdminProductConfigRoute;
    ProtectedAdminProductsRoute: typeof ProtectedAdminProductsRoute;
    ProtectedAdminServersRoute: typeof ProtectedAdminServersRoute;
    ProtectedAdminSettingsRoute: typeof ProtectedAdminSettingsRoute;
    ProtectedAdminStatusRoute: typeof ProtectedAdminStatusRoute;
    ProtectedAdminTicketsRoute: typeof ProtectedAdminTicketsRoute;
    ProtectedAdminDocEditorSlugRoute: typeof ProtectedAdminDocEditorSlugRoute;
}
declare const ProtectedAdminRouteRouteChildren: ProtectedAdminRouteRouteChildren;
declare const ProtectedAdminRouteRouteWithChildren: import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/admin", "/admin", "/_protected/admin", "/_protected/admin", undefined, import("@tanstack/router-core").ResolveParams<"/admin">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, ProtectedAdminRouteRouteChildren, unknown, unknown, unknown, undefined>;
interface ProtectedUserRouteRouteChildren {
    ProtectedUserDashboardRoute: typeof ProtectedUserDashboardRoute;
    ProtectedUserInvoicesRoute: typeof ProtectedUserInvoicesRoute;
    ProtectedUserOrdersRoute: typeof ProtectedUserOrdersRoute;
    ProtectedUserServersRoute: typeof ProtectedUserServersRoute;
    ProtectedUserSettingsRoute: typeof ProtectedUserSettingsRoute;
    ProtectedUserTicketsRoute: typeof ProtectedUserTicketsRoute;
}
declare const ProtectedUserRouteRouteChildren: ProtectedUserRouteRouteChildren;
declare const ProtectedUserRouteRouteWithChildren: import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "/user", "/user", "/_protected/user", "/_protected/user", undefined, import("@tanstack/router-core").ResolveParams<"/user">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, ProtectedUserRouteRouteChildren, unknown, unknown, unknown, undefined>;
interface ProtectedRouteChildren {
    ProtectedAdminRouteRoute: typeof ProtectedAdminRouteRouteWithChildren;
    ProtectedUserRouteRoute: typeof ProtectedUserRouteRouteWithChildren;
}
declare const ProtectedRouteChildren: ProtectedRouteChildren;
declare const ProtectedRouteWithChildren: import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, "", "/", "/_protected", "/_protected", undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, ({ location }: import("@tanstack/router-core").BeforeLoadContextOptions<import("@tanstack/react-router").Register, import("@tanstack/react-router").RootRoute<import("@tanstack/react-router").Register, undefined, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, unknown, unknown, unknown, unknown, undefined>, undefined, import("@tanstack/router-core").ResolveParams<"">, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, "/_protected", unknown, undefined>) => Promise<void>, {}, undefined, ProtectedRouteChildren, unknown, unknown, unknown, undefined>;
export declare const routeTree: import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, any, "/", "/", string, "__root__", undefined, {}, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, RootRouteChildren, FileRouteTypes, unknown, unknown, undefined>;
import type { getRouter } from './router.tsx';
declare module '@tanstack/react-start' {
    interface Register {
        ssr: true;
        router: Awaited<ReturnType<typeof getRouter>>;
    }
}
export {};
//# sourceMappingURL=routeTree.gen.d.ts.map