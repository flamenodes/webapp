import { createServerFn } from '@tanstack/react-start';
import { ptero } from './client';
export const getAllPetroNode = createServerFn({ method: 'GET' }).handler(async () => {
    try {
        const res = await ptero.get('/application/nodes');
        return res.data;
    }
    catch (err) {
        console.error(err.response);
    }
});
export const getPteroNodes = createServerFn({ method: 'GET' }).handler(async () => {
    try {
        const res = await ptero.get('/application/nodes');
        return (res.data?.data ?? []).map((n) => ({
            id: n.attributes.id,
            name: n.attributes.name,
            fqdn: n.attributes.fqdn,
            memory: n.attributes.memory,
            disk: n.attributes.disk,
        }));
    }
    catch (err) {
        console.error(err.response);
        return [];
    }
});
//# sourceMappingURL=nodes.js.map