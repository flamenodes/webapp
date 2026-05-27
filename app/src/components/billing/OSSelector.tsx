import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '#/components/ui/input'
import { Badge } from '#/components/ui/badge'
import { Button } from '#/components/ui/button'

interface OSSelectorProps {
  operatingSystems: {
    plainOS: string[]
    dockerApplications: string[]
    osWithPanel: string[]
    applications: string[]
  }
  onSelect?: (os: string) => void
}

type TabType = 'plain' | 'docker' | 'panel' | 'app'

const tabs: Array<{ id: TabType; label: string }> = [
  { id: 'plain', label: 'Plain OS' },
  { id: 'docker', label: 'Docker Application' },
  { id: 'panel', label: 'OS With Panel' },
  { id: 'app', label: 'Application' },
]

export function OSSelector({ operatingSystems, onSelect }: OSSelectorProps) {
  const [activeTab, setActiveTab] = useState<TabType>('plain')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedOS, setSelectedOS] = useState<string>('')
  const [showMore, setShowMore] = useState(false)

  const osMap: Record<TabType, string[]> = {
    plain: operatingSystems.plainOS,
    docker: operatingSystems.dockerApplications,
    panel: operatingSystems.osWithPanel,
    app: operatingSystems.applications,
  }

  const currentOSList = osMap[activeTab]
  const filteredOS = currentOSList.filter((os) =>
    os.toLowerCase().includes(searchQuery.toLowerCase())
  )
  const displayedOS = showMore ? filteredOS : filteredOS.slice(0, 4)

  const handleSelect = (os: string) => {
    setSelectedOS(os)
    onSelect?.(os)
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm dark:border-dark-border">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-foreground">Select operating system</h3>
          <Badge variant="outline" className="mt-2">
            Optional
          </Badge>
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        Select OS, control panel, or application that you want to install. You can change
        this later through VPS dashboard.
      </p>

      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search OS"
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2 border-b border-border pb-4 dark:border-dark-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id)
              setShowMore(false)
            }}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* OS Grid */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {displayedOS.map((os) => (
          <button
            key={os}
            onClick={() => handleSelect(os)}
            className={`rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all ${
              selectedOS === os
                ? 'border-primary bg-primary/10 text-primary dark:bg-primary/20'
                : 'border-border bg-muted/30 text-foreground hover:border-primary/50 dark:border-dark-border'
            }`}
          >
            {os}
          </button>
        ))}
      </div>

      {/* Show More */}
      {filteredOS.length > 4 && (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => setShowMore(!showMore)}
            className="text-primary hover:bg-primary/10"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </Button>
        </div>
      )}

      {filteredOS.length === 0 && (
        <div className="rounded-lg bg-muted/50 p-4 text-center">
          <p className="text-sm text-muted-foreground">No operating systems found</p>
        </div>
      )}
    </div>
  )
}
