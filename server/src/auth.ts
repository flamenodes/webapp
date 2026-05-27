import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { admin as adminPlugin, username } from 'better-auth/plugins'
import { prisma } from './prisma'
import { ac, admin, finance, manager, owner, support, user } from '../../app/src/lib/permissions'

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL!,
  database: prismaAdapter(prisma as any, { provider: 'postgresql' }),
  plugins: [
    username({ maxUsernameLength: 10, minUsernameLength: 4 }),
    adminPlugin({
      ac,
      roles: { user, support, finance, manager, admin, owner },
    }),
  ],
  emailAndPassword: { enabled: true },
})

