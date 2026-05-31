import { getSession } from '#/handlers/auth.handler';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/_auth')({
    beforeLoad: async ({ location }) => {
        const session = await getSession();
        if (session) {
            throw redirect({
                to: '/',
                search: { redirect: location.href },
            });
        }
    },
    component: () => <Outlet />,
});
//# sourceMappingURL=_auth.js.map