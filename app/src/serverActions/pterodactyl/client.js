import axios from 'axios';
export const ptero = axios.create({
    baseURL: `${process.env.PTERO_URL}/api`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PTERO_SECRET}`,
    },
});
//# sourceMappingURL=client.js.map