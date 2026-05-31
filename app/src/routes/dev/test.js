import { Button } from '#/components/ui/button';
import { getSocketServerUrl } from '#/lib/socket/socket-url';
import { broadcastDev } from '#/serverActions/dev/socket.api';
import { createPteroServer } from '#/serverActions/pterodactyl/server';
import { createFileRoute } from '@tanstack/react-router';
import { io } from 'socket.io-client';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
export const Route = createFileRoute('/dev/test')({
    component: TestPage,
});
function TestPage() {
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const socket = useMemo(() => io(getSocketServerUrl(), { withCredentials: true }), []);
    useEffect(() => {
        const onDevBroadcast = (payload) => {
            setMessages((prev) => [payload, ...prev].slice(0, 50));
        };
        socket.on('dev:broadcast', onDevBroadcast);
        return () => {
            socket.off('dev:broadcast', onDevBroadcast);
            socket.disconnect();
        };
    }, [socket]);
    const handleCreate = async () => {
        const res = await createPteroServer({
            data: {
                name: 'FlmNodes # Id 001',
                user: 1,
                egg: 1,
                nest: 1,
                specs: {
                    cpu: 0,
                    memory: 0,
                    swap: 0,
                    disk: 0,
                    database: 0,
                    allocation: 0,
                    backups: 0,
                },
            },
        });
        toast.success(res.message);
    };
    const handleClientBroadcast = () => {
        const trimmed = text.trim();
        if (!trimmed)
            return;
        socket.emit('dev:broadcast', { text: trimmed });
        setText('');
    };
    const handleServerBroadcast = async () => {
        const trimmed = text.trim();
        if (!trimmed)
            return;
        const res = await broadcastDev({ data: { text: trimmed } });
        if (!res.ok)
            toast.error('Socket.io not initialized yet');
        setText('');
    };
    return (<main className="h-screen flex flex-col gap-6 justify-center items-center">
      <div className="flex flex-col gap-3 w-full max-w-xl px-4">
        <div className="flex gap-2">
          <input className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a dev broadcast message…"/>
          <Button onClick={handleClientBroadcast} variant={'great'} size={'great'}>
            Broadcast (Client)
          </Button>
          <Button onClick={handleServerBroadcast} variant={'great'} size={'great'}>
            Broadcast (Server)
          </Button>
        </div>
        <Button onClick={handleCreate} variant={'great'} size={'great'}>
          Create Server (and broadcast)
        </Button>
        <div className="rounded-lg border border-border p-3 max-h-72 overflow-auto">
          {messages.length === 0 ? (<div className="text-sm text-muted-foreground">No messages yet.</div>) : (<ul className="space-y-2">
              {messages.map((m) => (<li key={m.id} className="text-sm">
                  <div className="text-xs text-muted-foreground">
                    {m.timestamp}
                    {m.from ? ` • ${m.from}` : null}
                  </div>
                  <div>{m.text}</div>
                </li>))}
            </ul>)}
        </div>
      </div>
    </main>);
}
//# sourceMappingURL=test.js.map