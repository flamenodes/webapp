export declare function getRouter(): import("@tanstack/router-core").RouterCore<import("@tanstack/router-core").Route<import("@tanstack/react-router").Register, any, "/", "/", string, "__root__", undefined, {}, {}, import("@tanstack/router-core").AnyContext, import("@tanstack/router-core").AnyContext, {}, undefined, import("./routeTree.gen").RootRouteChildren, import("./routeTree.gen").FileRouteTypes, unknown, unknown, undefined>, "never", false, import("@tanstack/history").RouterHistory, Record<string, any>>;
declare module '@tanstack/react-router' {
    interface Register {
        router: ReturnType<typeof getRouter>;
    }
}
//# sourceMappingURL=router.d.ts.map