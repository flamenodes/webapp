import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Mail, Calendar, Shield } from 'lucide-react'

interface UserProfileModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  user?: {
    id: string
    name: string
    email: string
    image?: string | null
    username: string
    firstname: string
    lastname: string
    role?: string | null
    banned?: boolean | null
    banReason?: string | null
    banExpires?: Date | null
    createdAt: Date
    updatedAt: Date
  }
}

export function UserProfileModal({ open, onOpenChange, user }: UserProfileModalProps) {
  if (!user) return null

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  const getRoleColor = (role?: string | null) => {
    switch (role) {
      case 'admin':
      case 'owner':
        return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'manager':
      case 'support':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      default:
        return 'bg-muted text-muted-foreground border-border'
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>User Profile</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {/* Avatar */}
          <div className="flex justify-center">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.image || ''} alt={user.name} />
              <AvatarFallback className="text-lg font-semibold">{initials}</AvatarFallback>
            </Avatar>
          </div>

          {/* Name */}
          <div className="text-center">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
          </div>

          <Separator />

          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Email</span>
            <span className="ml-auto font-medium text-sm">{user.email}</span>
          </div>

          {/* First Name */}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">First Name</span>
            <span className="font-medium">{user.firstname}</span>
          </div>

          {/* Last Name */}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last Name</span>
            <span className="font-medium">{user.lastname}</span>
          </div>

          <Separator />

          {/* Role */}
          {user.role && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Role</span>
              </div>
              <Badge variant="outline" className={`capitalize ${getRoleColor(user.role)}`}>
                {user.role}
              </Badge>
            </div>
          )}

          {/* Ban Status */}
          {user.banned && (
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
              <p className="text-sm font-medium text-red-500">Banned Account</p>
              {user.banReason && (
                <p className="mt-1 text-xs text-red-500/80">Reason: {user.banReason}</p>
              )}
              {user.banExpires && (
                <p className="mt-1 text-xs text-red-500/80">
                  Until: {new Date(user.banExpires).toLocaleDateString()}
                </p>
              )}
            </div>
          )}

          <Separator />

          {/* Created At */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Joined</span>
            </div>
            <span className="font-medium">
              {new Date(user.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Updated At */}
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last Updated</span>
            <span className="font-medium">
              {new Date(user.updatedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
