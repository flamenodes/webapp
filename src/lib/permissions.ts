import { createAccessControl } from 'better-auth/plugins/access'
import { defaultStatements, adminAc } from 'better-auth/plugins/admin/access'

export const statement = {
  ...defaultStatements,
  dashboard: ['user', 'admin'],
  servers: [
    'read',
    'read-all',
    'create',
    'update',
    'update-all',
    'delete',
    'delete-all',
    'start',
    'stop',
    'restart',
    'console',
  ],
  products: ['read', 'create', 'update', 'delete'],
  users: ['read', 'read-all', 'create', 'update', 'update-all', 'delete'],

  tickets: ['read', 'read-all', 'create', 'reply', 'close', 'delete'],

  billing: ['read', 'read-all', 'pay', 'refund'],

  announcements: ['read', 'create', 'update', 'delete'],

  roles: ['read', 'create', 'update', 'delete'],
} as const

export type Permissions = {
  [K in keyof typeof statement]?: (typeof statement)[K][number][]
}
export const ac = createAccessControl(statement)

const userPermissions = {
  dashboard: ['user'],
  servers: ['read', 'start', 'stop', 'restart', 'console'],
  products: ['read'],
  tickets: ['create', 'read', 'reply'],

  billing: ['read', 'pay'],

  announcements: ['read'],
} as const

export const user = ac.newRole({
  ...userPermissions,
})

export const support = ac.newRole({
  ...userPermissions,
  dashboard: ['admin'],
  tickets: [...userPermissions.tickets, 'read-all', 'close'],
})

export const finance = ac.newRole({
  ...userPermissions,
  dashboard: ['admin'],
  products: ['create', 'update', 'delete', 'read'],
  billing: [...userPermissions.billing, 'read-all', 'refund'],
})

export const manager = ac.newRole({
  ...userPermissions,
  dashboard: ['admin'],
  products: ['create', 'update', 'delete', 'read'],
  servers: [...userPermissions.servers, 'read-all', 'update-all'],

  users: ['read-all', 'update-all'],

  tickets: [...userPermissions.tickets, 'read-all', 'close'],

  announcements: ['read', 'create', 'update'],
})

export const admin = ac.newRole({
  ...userPermissions,
  dashboard: ['admin'],

  servers: [
    ...userPermissions.servers,
    'read-all',
    'create',
    'update-all',
    'delete-all',
  ],
  products: ['create', 'update', 'delete', 'read'],

  users: ['read-all', 'create', 'update-all', 'delete'],

  tickets: [...userPermissions.tickets, 'read-all', 'close', 'delete'],

  billing: [...userPermissions.billing, 'read-all', 'refund'],
  announcements: ['read', 'create', 'update', 'delete'],
  roles: ['read'],

  ...adminAc.statements
})

export const owner = ac.newRole({
  dashboard: ['admin', 'user'],

  servers: [
    'read',
    'read-all',
    'create',
    'update',
    'update-all',
    'delete',
    'delete-all',
    'start',
    'stop',
    'restart',
    'console',
  ],
  products: ['create', 'update', 'delete', 'read'],

  users: ['read', 'read-all', 'create', 'update', 'update-all', 'delete'],

  tickets: ['read', 'read-all', 'create', 'reply', 'close', 'delete'],

  billing: ['read', 'read-all', 'pay', 'refund'],

  announcements: ['read', 'create', 'update', 'delete'],

  roles: ['read', 'create', 'update', 'delete'],
})
