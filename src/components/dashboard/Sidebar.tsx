import * as LucideIcons from 'lucide-react'
import { ScrollArea } from '#/components/ui/scroll-area'
import FlameNodesLogo from '../blocks/FlameNodesLogo'
import { useLocation, useNavigate } from '@tanstack/react-router'
import { navItems } from '#/data/admin/navitems'

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
          h-screen overflow-scroll
          fixed top-0 left-0 z-30 w-64 flex flex-col
          bg-sidebar border-r border-sidebar-border
          transition-transform duration-300 ease-out will-change-transform
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center gap-3 px-5 h-[74px] border-b border-sidebar-border shrink-0">
          <FlameNodesLogo />
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          {sections.map((section) => {
            const items = navItems.filter((n) => n.section === section.key)
            if (!items.length) return null
            return (
              <div key={section.key} className="mb-5">
                <p className="px-3 mb-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
                  {section.label}
                </p>
                {items.map((item) => {
                  const Icon =
                    (LucideIcons as any)[item.icon] || LucideIcons.Circle
                  return (
                    <button
                      key={item.label}
                      onClick={() => navigate({ to: item.to })}
                      className={`
                        w-full flex items-center gap-3 px-3 h-11 rounded-xl text-sm font-medium
                        transition-all duration-200 mb-0.5
                        ${
                          isActive(item.to)
                            ? 'bg-gradient-to-r from-primary/20 to-primary/5 text-primary border border-primary/15'
                            : 'text-sidebar-foreground/70 hover:bg-white/5 hover:text-sidebar-foreground border border-transparent'
                        }
                      `}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {item.label}
                      {isActive(item.to) && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </button>
                  )
                })}
              </div>
            )
          })}
        </ScrollArea>

        {/* User footer */}
        <div className="px-3 py-4 border-t border-sidebar-border shrink-0">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="text-xs font-bold text-primary">AD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">
                admin@flamenodes.io
              </p>
            </div>
            <LucideIcons.ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
          </div>
        </div>
      </aside>
    </>
  )
}
