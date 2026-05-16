import { useState } from 'react'
import { MapPin } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '#/components/ui/select'

interface Location {
  id: string
  name: string
  latency: string
  status: string
  selected: boolean
}

interface LocationSelectorProps {
  locations: Array<{
    id: string
    name: string
    latency: string
    status: string
    selected: boolean
  }>
  onSelect?: (locationId: string) => void
}

export function LocationSelector({
  locations,
  onSelect,
}: LocationSelectorProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>(
    locations.find((l) => l.selected)?.id || locations[0]?.id || ''
  )

  const handleSelect = (value: string) => {
    setSelectedLocation(value)
    onSelect?.(value)
  }

  const currentLocation = locations.find((l) => l.id === selectedLocation)

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm dark:border-dark-border">
      <div className="mb-4 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-muted-foreground" />
        <h3 className="font-semibold text-foreground">Choose a server location</h3>
      </div>
      <p className="mb-6 text-sm text-muted-foreground">
        Choose a server location closest to you or your audience for optimal performance.
      </p>

      <Select value={selectedLocation} onValueChange={handleSelect}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {locations.map((location) => (
            <SelectItem key={location.id} value={location.id}>
              {location.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {currentLocation && (
        <div className="mt-4 rounded-lg bg-muted/50 p-3 dark:bg-muted/30">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Latency Status
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            {currentLocation.status === 'excellent'
              ? '✓ Excellent latency'
              : '⚡ Good latency'}{' '}
            {currentLocation.latency}
          </p>
        </div>
      )}
    </div>
  )
}
