import { useState } from 'react'
import { useAnnouncements } from '@/hooks/useAnnouncements'
import { X, AlertCircle, Info, CheckCircle, AlertTriangle, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'

const typeConfig = {
  INFO: {
    icon: Info,
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-500/20',
  },
  SUCCESS: {
    icon: CheckCircle,
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/20',
  },
  WARNING: {
    icon: AlertTriangle,
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    text: 'text-orange-600 dark:text-orange-400',
    iconBg: 'bg-orange-500/20',
  },
  ERROR: {
    icon: AlertCircle,
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    text: 'text-red-600 dark:text-red-400',
    iconBg: 'bg-red-500/20',
  },
  MAINTENANCE: {
    icon: Wrench,
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-600 dark:text-purple-400',
    iconBg: 'bg-purple-500/20',
  },
}

export function AnnouncementBanner() {
  const { announcements } = useAnnouncements()
  const [dismissed, setDismissed] = useState<Set<string>>(new Set())

  const activeAnnouncements = announcements.filter(
    (a: any) => !dismissed.has(a.id)
  )

  if (activeAnnouncements.length === 0) return null

  // Show highest priority announcement
  const announcement = activeAnnouncements[0]
  const config = typeConfig[announcement.type as keyof typeof typeConfig] || typeConfig.INFO
  const Icon = config.icon

  return (
    <div className={`border-b ${config.border} ${config.bg}`}>
      <div className="max-w-screen-2xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${config.iconBg} shrink-0`}>
            <Icon className={`w-4 h-4 ${config.text}`} />
          </div>
          
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-semibold ${config.text}`}>
              {announcement.title}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {announcement.message}
            </p>
          </div>

          {announcement.link && (
            <a
              href={announcement.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium ${config.text} hover:underline shrink-0`}
            >
              Learn more →
            </a>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() => setDismissed(prev => new Set(prev).add(announcement.id))}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
