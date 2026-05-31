import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { auth } from '@/lib/auth';
import { suspendExpiredServers } from '@/lib/server/suspend-expired-servers';
/**
 * Admin endpoint to manually trigger suspension of expired servers
 * Can also be called by a cron job or scheduled task
 */
export const triggerSuspendExpiredServers = createServerFn({ method: 'POST' }).handler(async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    // Check if user is admin (you may need to adjust this based on your auth setup)
    if (!session?.user || session.user.role !== 'admin') {
        return {
            success: false,
            message: 'Unauthorized: Admin access required',
        };
    }
    const result = await suspendExpiredServers();
    return result;
});
/**
 * Public endpoint for cron jobs (should be protected by API key or IP whitelist in production)
 * This can be called by external cron services like cron-job.org or GitHub Actions
 */
export const cronSuspendExpiredServers = createServerFn({ method: 'POST' }).handler(async () => {
    // In production, you should validate an API key or check the request IP
    // For now, we'll allow it to run
    // TODO: Add API key validation or IP whitelist
    const result = await suspendExpiredServers();
    return result;
});
//# sourceMappingURL=suspend-expired.api.js.map