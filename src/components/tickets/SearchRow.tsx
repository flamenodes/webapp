import { Search, SlidersHorizontal } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchRowProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function SearchRow({ searchQuery, onSearchChange }: SearchRowProps) {
  return (
    <div className="flex gap-2 px-4 pb-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tickets..."
          className="h-9 rounded-lg bg-muted pl-9 text-sm border-0 focus-visible:ring-1"
        />
      </div>
      <Button variant="ghost" size="icon" className="h-9 w-9 shrink-0">
        <SlidersHorizontal className="h-4 w-4" />
      </Button>
    </div>
  )
}
