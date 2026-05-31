import { prisma } from '#/db';
import { pteroServerData } from '../pterodactyl/configData';
import { ptero } from '../pterodactyl/client';
export async function enqueuePteroDeployment(job) {
    setImmediate(async () => {
        try {
            await processPteroDeploymentJob(job);
        }
        catch (error) {
            console.error('Ptero deployment failed:', error);
            await prisma.server.update({ where: { id: job.serverId }, data: { status: 'FAILED' } }).catch(() => { });
        }
    });
}
async function processPteroDeploymentJob(job) {
    const serverPayload = await pteroServerData({
        name: job.name,
        user: job.user,
        egg: job.egg,
        nest: job.nest,
        specs: job.specs,
    });
    // Merge extra env vars from ConfigurationValue metadata
    if (job.extraEnv && Object.keys(job.extraEnv).length > 0) {
        serverPayload.environment = { ...serverPayload.environment, ...job.extraEnv };
    }
    const res = await ptero.post('/application/servers', serverPayload);
    // Pterodactyl returns { object: 'server', attributes: {...} }
    const attributes = res.data?.attributes ?? res.data?.data?.attributes;
    if (!attributes) {
        console.error('Unexpected Pterodactyl response:', JSON.stringify(res.data));
        throw new Error('No server attributes returned from Pterodactyl');
    }
    await prisma.server.update({
        where: { id: job.serverId },
        data: {
            status: 'ACTIVE',
            pterodactylData: attributes,
            ip: attributes.relationships?.allocations?.data?.[0]?.attributes?.ip
                ?? serverPayload.allocation?.default
                ?? null,
            port: attributes.relationships?.allocations?.data?.[0]?.attributes?.port ?? null,
        },
    });
}
//# sourceMappingURL=queue.js.map