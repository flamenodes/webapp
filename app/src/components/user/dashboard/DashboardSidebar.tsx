import FlameNodesLogo from '#/components/blocks/FlameNodesLogo'
import { Link, useRouterState } from '@tanstack/react-router'
import {
  Flame, Plus, LayoutGrid, Server, ShoppingBag,
  ShoppingCart, Ticket, Settings,
} from 'lucide-react'

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid,   to: '/user/dashboard' },
  { id: 'servers',   label: 'Servers',   icon: Server,       to: '/user/servers'   },
  { id: 'orders',    label: 'Orders',    icon: ShoppingBag,  to: '/user/orders'    },
  { id: 'carts',     label: 'Carts',     icon: ShoppingCart, to: '/user/carts'     },
  { id: 'tickets',   label: 'Tickets',   icon: Ticket,       to: '/user/tickets'   },
]

interface Props {
  open: boolean
  onClose: () => void
}

function itemClass(active: boolean) {
  return [
    'relative flex items-center gap-3 h-11 rounded-xl w-full',
    'transition-all duration-200 outline-none group',
    'focus-visible:ring-2 focus-visible:ring-ring',
    'justify-start',
    'px-3',
    'border-l-[2px]',
    active
      ? 'bg-accent border-primary text-foreground'
      : 'border-transparent text-muted-foreground hover:bg-accent hover:text-foreground',
  ].join(' ')
}


export function DashboardSidebar({ open, onClose }: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-20 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          h-screen fixed top-0 left-0 z-30 flex flex-col
          bg-background/95 backdrop-blur-xl border-r border-border
          transition-transform duration-300 ease-out will-change-transform
          w-full max-w-[240px]
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Top glow strip */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="pointer-events-none absolute -top-6 -right-6 w-32 h-32 rounded-full bg-primary/8 blur-3xl" />

        {/* Branding */}
        <div className="flex items-center gap-3 h-[64px] px-4 shrink-0 overflow-hidden border-b border-border">
				<FlameNodesLogo textSize={20}/>
        
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1.5 mt-4 px-3 flex-1 overflow-y-auto">
          {NAV_ITEMS.map(({ id, label, icon: Icon, to }) => {
            const active = pathname === to
            return (
              <Link key={id} to={to} className={itemClass(active)}>
                <Icon
                  size={17}
                  strokeWidth={1.75}
                  className={`shrink-0 transition-transform duration-200 group-hover:scale-110 ${active ? 'text-primary' : ''}`}
                />
                <span className={`text-sm font-medium whitespace-nowrap ${active ? 'text-foreground' : ''}`}>
                  {label}
                </span>
              </Link>
            )
          })}

          {/* CTA */}
          <div className="mt-5">
            <button className="
              w-full h-11 rounded-xl flex items-center justify-center gap-2
              bg-primary text-primary-foreground font-semibold text-sm
              shadow-[0_0_20px_var(--primary)/30]
              hover:shadow-[0_0_28px_var(--primary)/50]
              hover:brightness-110 hover:-translate-y-px
              active:scale-[0.98]
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              md:w-full md:h-11 md:rounded-xl lg:w-full lg:h-11 lg:rounded-xl
            ">
              <Plus size={15} strokeWidth={2} className="shrink-0" />
              <span>Order Server</span>
            </button>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-3 pb-4 pt-3 border-t border-border shrink-0">
          <button className={itemClass(false)}>
            <Settings
              size={17}
              strokeWidth={1.75}
              className="shrink-0 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </aside>
    </>
  )
}
