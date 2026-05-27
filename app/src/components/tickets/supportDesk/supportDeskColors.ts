export function statusColor(status: string) {
  switch (status) {
    case 'OPEN':
      return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
    case 'IN_PROGRESS':
      return 'bg-sky-500/15 text-sky-300 border-sky-500/30'
    case 'PENDING':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30'
    case 'RESOLVED':
      return 'bg-violet-500/15 text-violet-300 border-violet-500/30'
    case 'CLOSED':
      return 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30'
    default:
      return 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30'
  }
}

export function priorityColor(priority: string) {
  switch (priority) {
    case 'LOW':
      return 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30'
    case 'MEDIUM':
      return 'bg-sky-500/15 text-sky-300 border-sky-500/30'
    case 'HIGH':
      return 'bg-amber-500/15 text-amber-300 border-amber-500/30'
    case 'URGENT':
      return 'bg-rose-500/15 text-rose-300 border-rose-500/30'
    default:
      return 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30'
  }
}

