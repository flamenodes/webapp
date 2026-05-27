import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

interface TicketSidebarHeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
  counts: {
    all: number
    open: number
    pending: number
    closed: number
  }
  onCreateTicket?: () => void
  showCreateButton?: boolean
}

export function TicketSidebarHeader({ activeTab, onTabChange, counts, onCreateTicket, showCreateButton = false }: TicketSidebarHeaderProps) {
  return (
    <div className="border-b bg-card px-4 py-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Tickets</h2>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="rounded-full">
            {counts.all}
          </Badge>
          {showCreateButton && (
            <Button size="sm" onClick={onCreateTicket}>
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={onTabChange}>
        <TabsList className="grid w-full grid-cols-4 bg-muted">
          <TabsTrigger value="all" className="text-xs">
            All
            <Badge variant="secondary" className="ml-1 rounded-full text-[10px] px-1.5">
              {counts.all}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="open" className="text-xs">
            Open
            <Badge variant="secondary" className="ml-1 rounded-full text-[10px] px-1.5">
              {counts.open}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="pending" className="text-xs">
            Pending
            <Badge variant="secondary" className="ml-1 rounded-full text-[10px] px-1.5">
              {counts.pending}
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="closed" className="text-xs">
            Closed
            <Badge variant="secondary" className="ml-1 rounded-full text-[10px] px-1.5">
              {counts.closed}
            </Badge>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
