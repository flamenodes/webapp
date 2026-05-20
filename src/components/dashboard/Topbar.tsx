import { Input } from '#/components/ui/input'
import { Button } from '#/components/ui/button'
import { ThemeSwitch } from '#/components/theme/ThemeSwitch'
import { Bell, Search, Menu } from 'lucide-react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getSession } from '#/handlers/auth.handler'
import { Suspense } from 'react'

interface TopbarProps {
  onMenuClick: () => void
}

export function Topbar({ onMenuClick }: TopbarProps) {
  const { data } = useSuspenseQuery({
    queryKey: ['session'],
    queryFn: () => getSession(),
  })
  return (
    <header className="h-[74px] flex items-center gap-4 px-5 border-b border-border bg-card/60 backdrop-blur-md shrink-0">
      <Button
        variant="ghost"
        size="icon-sm"
        className="lg:hidden text-muted-foreground"
        onClick={onMenuClick}
      >
        <Menu className="w-5 h-5" />
      </Button>

      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
        <Input
          placeholder="Search nodes, users, domains…"
          className="pl-9 pr-12 h-11 bg-muted/40 border-border focus-visible:border-primary/50 focus-visible:ring-primary/20 rounded-xl text-sm"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 rounded-md border border-border bg-muted px-1.5 py-0.5 text-xs text-muted-foreground font-mono">
          ⌘K
        </kbd>
      </div>

      <div className="flex items-center gap-1 ml-auto">
        {/* Notifications */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
        </div>

        <ThemeSwitch />

        <Suspense>
          <div className="ml-1 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-colors">
            <img src={data?.user.image!} alt="" />
          </div>
        </Suspense>
      </div>
    </header>
  )
}
