/**
 * Admin endpoint to manually trigger suspension of expired servers
 * Can also be called by a cron job or scheduled task
 */
export declare const triggerSuspendExpiredServers: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
/**
 * Public endpoint for cron jobs (should be protected by API key or IP whitelist in production)
 * This can be called by external cron services like cron-job.org or GitHub Actions
 */
export declare const cronSuspendExpiredServers: import("@tanstack/react-start").OptionalFetcher<undefined, undefined, Promise<any>>;
//# sourceMappingURL=suspend-expired.api.d.ts.map