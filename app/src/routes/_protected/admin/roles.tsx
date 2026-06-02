import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAllUsers, updateUserRole, getUserPermissions, updateUserPermissions } from '@/serverActions/roles.api'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { UserCog, ChevronDown, Shield, Loader2, Search } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export const Route = createFileRoute('/_protected/admin/roles')({
  head: () => ({ meta: [{ title: 'Roles & Permissions | Flame Nodes Admin' }] }),
  component: RolesPage,
})

const roleColors = {
  owner: 'bg-red-500/10 text-red-500 border-red-500/20',
  admin: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  manager: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  finance: 'bg-green-500/10 text-green-500 border-green-500/20',
  support: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  user: 'bg-gray-500/10 text-gray-500 border-gray-500/20',
}

const roleLabels = {
  owner: 'Owner',
  admin: 'Admin',
  manager: 'Manager',
  finance: 'Finance',
  support: 'Support',
  user: 'User',
}

const availablePermissions = {
  dashboard: ['user', 'admin'],
  servers: ['read', 'read-all', 'create', 'update', 'update-all', 'delete', 'delete-all', 'start', 'stop', 'restart', 'console'],
  products: ['read', 'create', 'update', 'delete'],
  users: ['read', 'read-all', 'create', 'update', 'update-all', 'delete'],
  tickets: ['read', 'read-all', 'create', 'reply', 'close', 'delete'],
  billing: ['read', 'read-all', 'update', 'update-all', 'pay', 'refund', 'delete'],
  announcements: ['read', 'create', 'update', 'delete'],
  roles: ['read', 'create', 'update', 'delete'],
}

function RolesPage() {
  const qc = useQueryClient()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUser, setSelectedUser] = useState<any>(null)
  const [permissionsDialogOpen, setPermissionsDialogOpen] = useState(false)

  const { data: response } = useSuspenseQuery({
    queryKey: ['all-users'],
    queryFn: () => getAllUsers(),
  })

  const users = response?.data || []

  const filteredUsers = users.filter(
    (user: any) =>
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const roleMutation = useMutation({
    mutationFn: ({ userId, role }: { userId: string; role: string }) =>
      updateUserRole({ data: { userId, role: role as any } }),
    onSuccess: (res) => {
      if (res.success) {
        qc.invalidateQueries({ queryKey: ['all-users'] })
        toast.success('User role updated successfully')
      } else {
        toast.error(res.message || 'Failed to update role')
      }
    },
    onError: () => toast.error('Failed to update role'),
  })

  const handleRoleChange = (userId: string, role: string) => {
    roleMutation.mutate({ userId, role })
  }

  const handleOpenPermissions = async (user: any) => {
    setSelectedUser(user)
    setPermissionsDialogOpen(true)
  }

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="px-5 py-6 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Roles & Permissions</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage user roles and permissions across the platform
            </p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <UserCog className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-base">User Management</CardTitle>
                  <CardDescription>View and modify user roles</CardDescription>
                </div>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {/* Header */}
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-medium text-muted-foreground border-b">
                <div className="col-span-4">User</div>
                <div className="col-span-3">Email</div>
                <div className="col-span-2">Role</div>
                <div className="col-span-2">Joined</div>
                <div className="col-span-1 text-right">Actions</div>
              </div>

              {/* User rows */}
              {filteredUsers.length === 0 ? (
                <div className="text-center py-8 text-sm text-muted-foreground">
                  No users found
                </div>
              ) : (
                filteredUsers.map((user: any) => (
                  <div
                    key={user.id}
                    className="grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-accent/50 rounded-lg transition-colors"
                  >
                    {/* User */}
                    <div className="col-span-4 flex items-center gap-3">
                      <Avatar className="w-9 h-9">
                        <AvatarImage src={user.image || ''} alt={user.name || 'User'} />
                        <AvatarFallback className="text-xs">
                          {user.name?.substring(0, 2).toUpperCase() || 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="text-sm font-medium truncate">{user.name || 'Unknown'}</p>
                        {user.emailVerified && (
                          <Badge variant="outline" className="h-4 text-[9px] px-1 mt-0.5">
                            Verified
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-span-3">
                      <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                    </div>

                    {/* Role */}
                    <div className="col-span-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 gap-2"
                            disabled={roleMutation.isPending}
                          >
                            <Badge
                              variant="outline"
                              className={`h-5 text-[10px] px-2 ${roleColors[(user.role || 'user') as keyof typeof roleColors]}`}
                            >
                              {roleLabels[(user.role || 'user') as keyof typeof roleLabels]}
                            </Badge>
                            <ChevronDown className="w-3 h-3" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          {Object.entries(roleLabels).map(([value, label]) => (
                            <DropdownMenuItem
                              key={value}
                              onClick={() => handleRoleChange(user.id, value)}
                              className="cursor-pointer"
                            >
                              <Badge
                                variant="outline"
                                className={`h-5 text-[10px] px-2 mr-2 ${roleColors[value as keyof typeof roleColors]}`}
                              >
                                {label}
                              </Badge>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Joined */}
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground">
                        {new Date(user.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="col-span-1 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 text-xs"
                        onClick={() => handleOpenPermissions(user)}
                      >
                        <Shield className="w-3 h-3 mr-1" />
                        Permissions
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <PermissionsDialog
          user={selectedUser}
          open={permissionsDialogOpen}
          onOpenChange={setPermissionsDialogOpen}
        />
      </div>
    </main>
  )
}

function PermissionsDialog({
  user,
  open,
  onOpenChange,
}: {
  user: any
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const qc = useQueryClient()
  const [customPermissions, setCustomPermissions] = useState<Record<string, string[]>>({})
  const [loading, setLoading] = useState(false)

  const permissionsMutation = useMutation({
    mutationFn: (permissions: Record<string, string[]>) =>
      updateUserPermissions({ data: { userId: user?.id, permissions } }),
    onSuccess: (res) => {
      if (res.success) {
        toast.success('Permissions updated successfully')
        onOpenChange(false)
      } else {
        toast.error(res.message || 'Failed to update permissions')
      }
    },
    onError: () => toast.error('Failed to update permissions'),
  })

  const loadPermissions = async () => {
    if (!user?.id) return
    setLoading(true)
    try {
      const res = await getUserPermissions({ data: { userId: user.id } })
      if (res.success && res.data) {
        setCustomPermissions(res.data as any)
      }
    } catch (error) {
      toast.error('Failed to load permissions')
    } finally {
      setLoading(false)
    }
  }

  // Load permissions when dialog opens
  if (open && user?.id && Object.keys(customPermissions).length === 0 && !loading) {
    loadPermissions()
  }

  const handlePermissionToggle = (category: string, permission: string) => {
    setCustomPermissions((prev) => {
      const current = prev[category] || []
      const updated = current.includes(permission)
        ? current.filter((p) => p !== permission)
        : [...current, permission]
      return { ...prev, [category]: updated }
    })
  }

  const handleSave = () => {
    permissionsMutation.mutate(customPermissions)
  }

  if (!user) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Custom Permissions for {user.name}</DialogTitle>
          <DialogDescription>
            Override role-based permissions with custom access controls
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <Avatar className="w-12 h-12">
              <AvatarImage src={user.image || ''} alt={user.name || 'User'} />
              <AvatarFallback>{user.name?.substring(0, 2).toUpperCase() || 'U'}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <Badge
              variant="outline"
              className={`ml-auto ${roleColors[(user.role || 'user') as keyof typeof roleColors]}`}
            >
              {roleLabels[(user.role || 'user') as keyof typeof roleLabels]}
            </Badge>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(availablePermissions).map(([category, permissions]) => (
                <div key={category} className="space-y-2">
                  <Label className="text-sm font-semibold capitalize">{category}</Label>
                  <div className="grid grid-cols-2 gap-3 p-4 border rounded-lg">
                    {permissions.map((permission) => (
                      <div key={permission} className="flex items-center space-x-2">
                        <Checkbox
                          id={`${category}-${permission}`}
                          checked={customPermissions[category]?.includes(permission) || false}
                          onCheckedChange={() => handlePermissionToggle(category, permission)}
                        />
                        <label
                          htmlFor={`${category}-${permission}`}
                          className="text-sm cursor-pointer select-none"
                        >
                          {permission}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4 border-t">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={permissionsMutation.isPending || loading}>
              {permissionsMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Permissions'
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
