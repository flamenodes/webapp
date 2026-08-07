import { createAuthClient } from 'better-auth/react'
import {
  adminClient,
  usernameClient,
  inferAdditionalFields,
} from 'better-auth/client/plugins'

export const authClient = createAuthClient({
  baseURL: import.meta.env.VITE_CLIENT_URL,
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
})
