import * as LucideIcons from 'lucide-react'
import { ScrollArea } from '#/components/ui/scroll-area'
import FlameNodesLogo from '../blocks/FlameNodesLogo'
import { useLocation, useNavigate } from '@tanstack/react-router'
import { navItems } from '#/data/admin/navitems'
import { useQuery } from '@tanstack/react-query'
import { getSession } from '#/handlers/auth.handler'
import { getPteroUrl } from '#/serverActions/pterodactyl/reset-password'
import { isWebSettingsEnabled } from '@/serverActions/web-settings.api'
import { Avatar, AvatarFallback, AvatarImage } from '#/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '#/components/ui/dropdown-menu'

const sections = [
  { key: 'main', label: 'Main' },
  { key: 'management', label: 'Management' },
  { key: 'support', label: 'Support' },
  { key: 'system', label: 'System' },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: () => getSession(),
  })
  const isOwner = (session?.user as any)?.role === 'owner'

  const { data: pteroUrl } = useQuery({
    queryKey: ['ptero-url'],
    queryFn: () => getPteroUrl(),
    enabled: isOwner,
  })

  const { data: webSettingsEnabled = false } = useQuery({
    queryKey: ['web-settings-enabled'],
    queryFn: () => isWebSettingsEnabled(),
  })

  const isActive = (to: any) => {
    return to === location.pathname;
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          h-screen overflow-hidden
          fixed top-0 left-0 z-30 w-64 flex flex-col
          bg-sidebar border-r border-sidebar-border
          transition-transform duration-300 ease-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center gap-3 px-5 h-[74px] border-b border-sidebar-border shrink-0">
          <FlameNodesLogo />
        </div>

        <ScrollArea className="flex-1 px-3 py-4 overflow-auto">
          {sections.map((section) => {
            const items = navItems.filter((n) => {
              // Filter out Web Settings if feature is disabled
              if (n.to === '/admin/web-settings' && !webSettingsEnabled) {
                return false
              }
              return n.section === section.key
            })
            if (!items.length) return null
            return (
              <div key={section.key} className="mb-5">
                <div className="px-3 py-1.5 mb-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70">
                    {section.label}
                  </p>
                </div>
                <div className="space-y-0.5">
                  {items.map((item) => {
                    const Icon =
                      (LucideIcons as any)[item.icon] || LucideIcons.Circle
                    return (
                      <button
                        key={item.label}
                        onClick={() => navigate({ to: item.to })}
                        className={`
                          w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium
                          transition-all duration-150
                          ${
                            isActive(item.to)
                              ? 'bg-sidebar-accent text-sidebar-foreground shadow-sm'
                              : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                          }
                        `}
                      >
                        <Icon className="w-[18px] h-[18px] shrink-0" />
                        <span className="flex-1 text-left">{item.label}</span>
                        {isActive(item.to) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}

          {/* Owner-only: Pterodactyl Admin Panel link */}
          {isOwner && pteroUrl && (
            <div className="mb-5">
              <div className="px-3 py-1.5 mb-1.5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/70">
                  Pterodactyl
                </p>
              </div>
              <div className="space-y-0.5">
                <a
                  href={pteroUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                >
                  <LucideIcons.ExternalLink className="w-[18px] h-[18px] shrink-0" />
                  <span className="flex-1 text-left">Admin Panel</span>
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-primary/15 text-primary uppercase tracking-wide shrink-0">
                    Owner
                  </span>
                </a>
              </div>
            </div>
          )}
        </ScrollArea>

        {/* User footer */}
        <div className="px-3 py-3 border-t border-sidebar-border shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-sidebar-accent/50 transition-colors">
                <Avatar className="w-9 h-9 shrink-0">
                  <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || 'User'} />
                  <AvatarFallback className="bg-primary/15 text-primary font-bold">
                    {session?.user?.name?.substring(0, 2).toUpperCase() || 'AD'}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm font-semibold truncate leading-tight">
                    {session?.user?.name || 'Admin User'}
                  </p>
                  <p className="text-[11px] text-muted-foreground truncate leading-tight mt-0.5">
                    {session?.user?.email || 'admin@flamenodes.io'}
                  </p>
                </div>
                <LucideIcons.ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => navigate({ to: '/admin/settings' })} className="cursor-pointer">
                <LucideIcons.Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate({ to: '/billing/cart' })} className="cursor-pointer">
                <LucideIcons.CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {
                // Add logout logic here
                navigate({ to: '/login' })
              }} className="cursor-pointer text-destructive focus:text-destructive" variant="destructive">
                <LucideIcons.LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>
    </>
  )
}
