import { createServerFn } from '@tanstack/react-start';
import { emitDevBroadcast } from '#/lib/server/socket-context';
import { z } from 'zod';
export const broadcastDev = createServerFn({ method: 'POST' })
    .inputValidator(z.object({ text: z.string() }))
    .handler(async ({ data }) => {
    const payload = {
        id: `${Date.now()}`,
        text: data.text,
        timestamp: new Date().toISOString(),
    };
    const ok = await emitDevBroadcast(payload);
    return { ok, payload };
});
//# sourceMappingURL=socket.api.js.map