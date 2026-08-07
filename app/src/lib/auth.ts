import { prisma } from '#/db'
import { betterAuth } from 'better-auth'
import type { GoogleProfile } from 'better-auth/social-providers'
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
  baseURL: process.env.CLIENT_URL!,
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  user: {
    additionalFields: {
      firstname: {
        input: true,
        type: 'string',
        required: true,
      },
      lastname: {
        input: true,
        type: 'string',
        required: true,
      },
      clientId: {
        unique: true,
        fieldName: 'clientId',
        type: 'string',
        required: false,
      },
    },
  },
  plugins: [
    username({ maxUsernameLength: 60, minUsernameLength: 3 }),
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

      mapProfileToUser(profile: GoogleProfile) {
        const fullName = profile.name

        return {
          username: profile.email.split('@')[0]?.replace(/[^a-zA-Z0-9_]/g, '_'),
          firstname: profile.given_name,
          lastname: profile.family_name,
          name: fullName,
          email: profile.email,
          image: profile.picture,
        }
      },
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      mapProfileToUser(profile: any) {
        const fullName =
          profile.global_name ?? profile.display_name ?? profile.username

        const [firstname, ...rest] = fullName.split(' ')

        return {
          username: `${profile.username}_${profile.id.slice(-4)}`,

          firstname,

          lastname: rest.join(' ') || '',

          name: fullName,

          email: profile.email,

          image: profile.avatar
            ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
            : undefined,
        }
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          return {
            data: {
              ...user,
              clientId: `#FN-${crypto
                .randomUUID()
                .split('-')[0]
                .toUpperCase()}`,
            },
          }
        },
      },
    },
  },
})
