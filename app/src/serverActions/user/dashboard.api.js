import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { prisma } from '#/db';
import { auth } from '@/lib/auth';
export const getUserServers = createServerFn({ method: 'GET' }).handler(async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        throw new Error('Unauthorized');
    return prisma.server.findMany({
        where: { userId: session.user.id },
        include: {
            orderItem: {
                include: {
                    product: true,
                },
            },
        },
        orderBy: { createdAt: 'desc' },
    });
});
export const getUserNotifications = createServerFn({ method: 'GET' }).handler(async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        throw new Error('Unauthorized');
    // Get recent orders
    const recentOrders = await prisma.order.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: 'desc' },
        take: 5,
    });
    // Get recent servers
    const recentServers = await prisma.server.findMany({
        where: { userId: session.user.id },
        orderBy: { createdAt: 'desc' },
        take: 5,
    });
    const notifications = [
        ...recentOrders.map((order) => ({
            id: `order-${order.id}`,
            type: 'order',
            title: `Order ${order.status.toLowerCase()}`,
            message: `Order #${order.id.slice(0, 8)} - ₹${order.totalAmount}`,
            timestamp: order.createdAt,
            read: false,
        })),
        ...recentServers.map((server) => ({
            id: `server-${server.id}`,
            type: 'server',
            title: `Server ${server.status.toLowerCase()}`,
            message: server.name,
            timestamp: server.createdAt,
            read: false,
        })),
    ];
    return notifications.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 10);
});
export const getUserStats = createServerFn({ method: 'GET' }).handler(async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        throw new Error('Unauthorized');
    const [totalServers, activeServers, totalOrders, pendingOrders] = await Promise.all([
        prisma.server.count({ where: { userId: session.user.id } }),
        prisma.server.count({ where: { userId: session.user.id, status: 'ACTIVE' } }),
        prisma.order.count({ where: { userId: session.user.id } }),
        prisma.order.count({ where: { userId: session.user.id, status: 'PENDING' } }),
    ]);
    return {
        totalServers,
        activeServers,
        totalOrders,
        pendingOrders,
    };
});
//# sourceMappingURL=dashboard.api.js.map