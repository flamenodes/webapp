import { prisma } from '#/db'
import { betterAuth } from 'better-auth'
import { admin as adminPlugin, username } from 'better-auth/plugins'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import {
  ac,
  user,
  support,
  finance,
  manager,
  admin,
  owner,
} from './permissions'

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL!,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
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

  plugins: [
    username({ maxUsernameLength: 10, minUsernameLength: 4 }),
    adminPlugin({
      ac,
      roles: {
        user,
        support,
        finance,
        manager,
        admin,
        owner,
      },
    }),
  ],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              clientId: `#FN-${crypto.randomUUID().split('-')[0].toUpperCase()}`,
            },
          }
        },
      },
    },
  },
})
