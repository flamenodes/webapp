import { createServerFn } from '@tanstack/react-start';
import { getRequestHeaders } from '@tanstack/react-start/server';
import { auth } from '@/lib/auth';
import { ptero } from './client';
function generatePassword(length = 16) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}
export const getPteroUrl = createServerFn({ method: 'GET' }).handler(async () => {
    return process.env.PTERO_URL ?? '';
});
export const resetPteroPassword = createServerFn({ method: 'POST' }).handler(async () => {
    const headers = getRequestHeaders();
    const session = await auth.api.getSession({ headers });
    if (!session?.user)
        throw new Error('Unauthorized');
    const email = session.user.email;
    const password = generatePassword();
    // Find user by email
    const searchRes = await ptero.get('/application/users', { params: { filter: { email } } });
    const users = searchRes.data?.data ?? [];
    const pteroUser = users.find((u) => u.attributes?.email === email);
    if (!pteroUser) {
        const username = email.split('@')[0].replace(/[^a-z0-9]/gi, '').toLowerCase().slice(0, 16) || 'user';
        await ptero.post('/application/users', {
            email,
            username,
            first_name: session.user.name?.split(' ')[0] ?? username,
            last_name: session.user.name?.split(' ')[1] ?? 'User',
            password,
            language: 'en',
            root_admin: false,
        });
    }
    else {
        const id = pteroUser.attributes.id;
        // Preserve existing root_admin — never downgrade it on a password reset
        await ptero.patch(`/application/users/${id}`, {
            email: pteroUser.attributes.email,
            username: pteroUser.attributes.username,
            first_name: pteroUser.attributes.first_name,
            last_name: pteroUser.attributes.last_name,
            password,
            root_admin: pteroUser.attributes.root_admin ?? false,
        });
    }
    return { password };
});
//# sourceMappingURL=reset-password.js.map