import ImageKit from '@imagekit/nodejs';
export const imagekit = new ImageKit({
    baseURL: process.env.IMAGEKIT_BASE_URL,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
//# sourceMappingURL=imagekit.js.map