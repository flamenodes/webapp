import { createAuthClient } from 'better-auth/react';
import { adminClient, usernameClient, inferAdditionalFields, } from 'better-auth/client/plugins';
export const authClient = createAuthClient({
    baseURL: 'http://localhost:3000',
    plugins: [
        usernameClient(),
        adminClient(),
        inferAdditionalFields({
            user: {
                firstname: {
                    type: 'string',
                    required: true,
                },
                lastname: {
                    type: 'string',
                    required: true,
                },
            },
        }),
    ],
});
//# sourceMappingURL=auth-client.js.map