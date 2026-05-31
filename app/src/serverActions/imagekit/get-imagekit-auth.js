import { createServerFn } from '@tanstack/react-start';
import { imagekit } from '@/lib/imagekit';
export const getImageKitAuth = createServerFn({
    method: 'GET',
}).handler(async () => {
    const { token, expire, signature } = imagekit.helper.getAuthenticationParameters();
    return {
        token,
        expire,
        signature,
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    };
});
//# sourceMappingURL=get-imagekit-auth.js.map