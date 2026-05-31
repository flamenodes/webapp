export declare const statement: {
    readonly dashboard: readonly ["user", "admin"];
    readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
    readonly products: readonly ["read", "create", "update", "delete"];
    readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
    readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
    readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
    readonly announcements: readonly ["read", "create", "update", "delete"];
    readonly roles: readonly ["read", "create", "update", "delete"];
    readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
    readonly session: readonly ["list", "revoke", "delete"];
};
export type Permissions = {
    [K in keyof typeof statement]?: (typeof statement)[K][number][];
};
export declare const ac: {
    newRole<const TRoleStatements extends import("better-auth/plugins").Statements>(statements: import("better-auth/plugins").RoleInput<{
        readonly dashboard: readonly ["user", "admin"];
        readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
        readonly products: readonly ["read", "create", "update", "delete"];
        readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
        readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
        readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
        readonly announcements: readonly ["read", "create", "update", "delete"];
        readonly roles: readonly ["read", "create", "update", "delete"];
        readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
        readonly session: readonly ["list", "revoke", "delete"];
    }, TRoleStatements>): import("better-auth/plugins").Role<import("better-auth/plugins").ExactRoleStatements<TRoleStatements>, {
        readonly dashboard: readonly ["user", "admin"];
        readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
        readonly products: readonly ["read", "create", "update", "delete"];
        readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
        readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
        readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
        readonly announcements: readonly ["read", "create", "update", "delete"];
        readonly roles: readonly ["read", "create", "update", "delete"];
        readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
        readonly session: readonly ["list", "revoke", "delete"];
    }>;
    statements: {
        readonly dashboard: readonly ["user", "admin"];
        readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
        readonly products: readonly ["read", "create", "update", "delete"];
        readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
        readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
        readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
        readonly announcements: readonly ["read", "create", "update", "delete"];
        readonly roles: readonly ["read", "create", "update", "delete"];
        readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
        readonly session: readonly ["list", "revoke", "delete"];
    };
};
export declare const user: import("better-auth/plugins").Role<import("better-auth/plugins").ExactRoleStatements<{
    readonly dashboard: readonly ["user"];
    readonly servers: readonly ["read", "start", "stop", "restart", "console"];
    readonly products: readonly ["read"];
    readonly tickets: readonly ["create", "read", "reply"];
    readonly billing: readonly ["read", "update", "pay"];
    readonly announcements: readonly ["read"];
}>, {
    readonly dashboard: readonly ["user", "admin"];
    readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
    readonly products: readonly ["read", "create", "update", "delete"];
    readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
    readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
    readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
    readonly announcements: readonly ["read", "create", "update", "delete"];
    readonly roles: readonly ["read", "create", "update", "delete"];
    readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
    readonly session: readonly ["list", "revoke", "delete"];
}>;
export declare const support: import("better-auth/plugins").Role<import("better-auth/plugins").ExactRoleStatements<{
    readonly dashboard: ["admin"];
    readonly tickets: ["create", "read", "reply", "read-all", "close"];
    readonly servers: readonly ["read", "start", "stop", "restart", "console"];
    readonly products: readonly ["read"];
    readonly billing: readonly ["read", "update", "pay"];
    readonly announcements: readonly ["read"];
}>, {
    readonly dashboard: readonly ["user", "admin"];
    readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
    readonly products: readonly ["read", "create", "update", "delete"];
    readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
    readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
    readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
    readonly announcements: readonly ["read", "create", "update", "delete"];
    readonly roles: readonly ["read", "create", "update", "delete"];
    readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
    readonly session: readonly ["list", "revoke", "delete"];
}>;
export declare const finance: import("better-auth/plugins").Role<import("better-auth/plugins").ExactRoleStatements<{
    readonly dashboard: ["admin"];
    readonly products: ["create", "update", "delete", "read"];
    readonly billing: ["read", "update", "pay", "read-all", "update-all", "refund", "delete"];
    readonly servers: readonly ["read", "start", "stop", "restart", "console"];
    readonly tickets: readonly ["create", "read", "reply"];
    readonly announcements: readonly ["read"];
}>, {
    readonly dashboard: readonly ["user", "admin"];
    readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
    readonly products: readonly ["read", "create", "update", "delete"];
    readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
    readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
    readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
    readonly announcements: readonly ["read", "create", "update", "delete"];
    readonly roles: readonly ["read", "create", "update", "delete"];
    readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
    readonly session: readonly ["list", "revoke", "delete"];
}>;
export declare const manager: import("better-auth/plugins").Role<import("better-auth/plugins").ExactRoleStatements<{
    readonly dashboard: ["admin"];
    readonly products: ["create", "update", "delete", "read"];
    readonly servers: ["read", "start", "stop", "restart", "console", "read-all", "update-all"];
    readonly users: ["read-all", "update-all"];
    readonly tickets: ["create", "read", "reply", "read-all", "close"];
    readonly announcements: ["read", "create", "update"];
    readonly billing: readonly ["read", "update", "pay"];
}>, {
    readonly dashboard: readonly ["user", "admin"];
    readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
    readonly products: readonly ["read", "create", "update", "delete"];
    readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
    readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
    readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
    readonly announcements: readonly ["read", "create", "update", "delete"];
    readonly roles: readonly ["read", "create", "update", "delete"];
    readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
    readonly session: readonly ["list", "revoke", "delete"];
}>;
export declare const admin: import("better-auth/plugins").Role<import("better-auth/plugins").ExactRoleStatements<{
    readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "delete", "set-password", "get", "update"];
    readonly session: readonly ["list", "revoke", "delete"];
    readonly dashboard: ["admin"];
    readonly servers: ["read", "start", "stop", "restart", "console", "read-all", "create", "update-all", "delete-all"];
    readonly products: ["create", "update", "delete", "read"];
    readonly users: ["read-all", "create", "update-all", "delete"];
    readonly tickets: ["create", "read", "reply", "read-all", "close", "delete"];
    readonly billing: ["read", "update", "pay", "read-all", "update-all", "refund", "delete"];
    readonly announcements: ["read", "create", "update", "delete"];
    readonly roles: ["read"];
}>, {
    readonly dashboard: readonly ["user", "admin"];
    readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
    readonly products: readonly ["read", "create", "update", "delete"];
    readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
    readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
    readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
    readonly announcements: readonly ["read", "create", "update", "delete"];
    readonly roles: readonly ["read", "create", "update", "delete"];
    readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
    readonly session: readonly ["list", "revoke", "delete"];
}>;
export declare const owner: import("better-auth/plugins").Role<import("better-auth/plugins").ExactRoleStatements<{
    readonly dashboard: ["admin", "user"];
    readonly servers: ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
    readonly products: ["create", "update", "delete", "read"];
    readonly users: ["read", "read-all", "create", "update", "update-all", "delete"];
    readonly tickets: ["read", "read-all", "create", "reply", "close", "delete"];
    readonly billing: ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
    readonly announcements: ["read", "create", "update", "delete"];
    readonly roles: ["read", "create", "update", "delete"];
}>, {
    readonly dashboard: readonly ["user", "admin"];
    readonly servers: readonly ["read", "read-all", "create", "update", "update-all", "delete", "delete-all", "start", "stop", "restart", "console"];
    readonly products: readonly ["read", "create", "update", "delete"];
    readonly users: readonly ["read", "read-all", "create", "update", "update-all", "delete"];
    readonly tickets: readonly ["read", "read-all", "create", "reply", "close", "delete"];
    readonly billing: readonly ["read", "read-all", "update", "update-all", "pay", "refund", "delete"];
    readonly announcements: readonly ["read", "create", "update", "delete"];
    readonly roles: readonly ["read", "create", "update", "delete"];
    readonly user: readonly ["create", "list", "set-role", "ban", "impersonate", "impersonate-admins", "delete", "set-password", "get", "update"];
    readonly session: readonly ["list", "revoke", "delete"];
}>;
//# sourceMappingURL=permissions.d.ts.map