import { Bell, CreditCard, Menu } from 'lucide-react';
import { ThemeSwitch } from '#/components/theme/ThemeSwitch';
import UserProfileDropdown from './UserProfileDropdown';
export function DashboardTopbar({ onMenuClick }) {
    return (<header className="h-[60px] shrink-0 flex items-center justify-end gap-2 px-4 border-b border-border bg-background/80 backdrop-blur-xl">
      <button onClick={onMenuClick} className="mr-auto flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Toggle sidebar">
        <Menu size={17}/>
      </button>

      {/* Notifications */}
      <div className="relative">
        <button className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 hover:shadow-[0_0_12px_var(--primary)/15] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Bell size={16} strokeWidth={1.75}/>
        </button>
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary shadow-[0_0_6px_var(--primary)] border border-background"/>
      </div>

      {/* Billing */}
      <button className="flex items-center gap-1.5 h-9 px-3 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40 hover:shadow-[0_0_12px_var(--primary)/15] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <CreditCard size={15} strokeWidth={1.75}/>
        <span className="text-xs font-medium hidden sm:block">Billing</span>
      </button>

      {/* Theme switch */}
      <div className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card hover:border-primary/40 hover:shadow-[0_0_12px_var(--primary)/15] transition-all duration-200 [&>button]:border-0 [&>button]:bg-transparent [&>button]:shadow-none [&>button]:w-full [&>button]:h-full [&>button]:rounded-full">
        <ThemeSwitch />
      </div>

      {/* Avatar */}
      <UserProfileDropdown />
    </header>);
}
//# sourceMappingURL=DashboardTopbar.js.map