import { createAuthClient } from 'better-auth/react'
import { adminClient, usernameClient } from 'better-auth/client/plugins'

export const authClient = createAuthClient({
  baseURL: 'http://localhost:3000',
  user: {
    additionalFields: {
      firstname: {
        type: 'string',
        required: true,
      },
      lastname: {
        type: 'string',
        required: true,
      },
    },
  },
  plugins: [usernameClient(), adminClient()],
})
