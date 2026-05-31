/**
 * Suspends servers that have expired billing cycles
 * This should be run periodically (e.g., via cron job or scheduled task)
 */
export declare function suspendExpiredServers(): Promise<{
    success: boolean;
    message: any;
    suspended: number;
    failed: number;
    errors: any[];
}>;
//# sourceMappingURL=suspend-expired-servers.d.ts.map