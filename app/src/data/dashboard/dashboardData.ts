export const activeServers = [
  {
    id: 'srv-001',
    name: 'Minecraft SMP',
    hostname: 'mc-smp.us-east.flamenodes.io',
    location: 'New York, US',
    status: 'online' as const,
    icon: 'Pickaxe',
  },
  {
    id: 'srv-002',
    name: 'CS2 Competitive',
    hostname: 'cs2-eu.frankfurt.flamenodes.io',
    location: 'Frankfurt, DE',
    status: 'online' as const,
    icon: 'Crosshair',
  },
  {
    id: 'srv-003',
    name: 'Rust Survival',
    hostname: 'rust-sg.ap-south.flamenodes.io',
    location: 'Singapore, SG',
    status: 'online' as const,
    icon: 'Wrench',
  },
  {
    id: 'srv-004',
    name: 'Valheim World',
    hostname: 'valheim-uk.lon.flamenodes.io',
    location: 'London, UK',
    status: 'maintenance' as const,
    icon: 'Sword',
  },
  {
    id: 'srv-005',
    name: 'ARK Cluster',
    hostname: 'ark-la.us-west.flamenodes.io',
    location: 'Los Angeles, US',
    status: 'online' as const,
    icon: 'Globe',
  },
]

export const systemUpdates = [
  {
    id: 1,
    title: 'Panel v3.2.1 released',
    description: 'Performance improvements and bug fixes for the control panel.',
    time: '2h ago',
  },
  {
    id: 2,
    title: 'Node kernel patched',
    description: 'Security patch applied to all EU region nodes.',
    time: '6h ago',
  },
  {
    id: 3,
    title: 'DDoS mitigation upgraded',
    description: 'Increased protection capacity to 2Tbps across all regions.',
    time: '1d ago',
  },
  {
    id: 4,
    title: 'Backup system migrated',
    description: 'Backups now stored on redundant S3-compatible storage.',
    time: '2d ago',
  },
]

export const notifications = [
  {
    id: 1,
    title: 'Invoice #1042 due',
    description: 'Your invoice of $89.00 is due in 3 days.',
    time: '30m ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Server restarted',
    description: 'mc-smp.us-east was automatically restarted after crash.',
    time: '1h ago',
    unread: true,
  },
  {
    id: 3,
    title: 'Ticket #88 replied',
    description: 'Support has responded to your open ticket.',
    time: '3h ago',
    unread: false,
  },
  {
    id: 4,
    title: 'New login detected',
    description: 'Login from Berlin, DE — Chrome on Windows.',
    time: '5h ago',
    unread: false,
  },
]

export const heroMeta = [
  { icon: 'Hash', label: 'Client ID', value: '#FN-00421' },
  { icon: 'ShieldCheck', label: 'Verified', value: 'Email & 2FA' },
  { icon: 'MapPin', label: 'Region', value: 'US East' },
  { icon: 'Clock', label: 'Last Login', value: '2 hours ago' },
]

export const userStats = [
  {
    icon: 'Server',
    label: 'Active Servers',
    value: '5',
    change: '+1 this week',
    trend: 'up' as const,
  },
  {
    icon: 'CreditCard',
    label: 'Next Invoice',
    value: '$89.00',
    change: 'Due in 3 days',
    trend: 'warning' as const,
  },
  {
    icon: 'Ticket',
    label: 'Open Tickets',
    value: '2',
    change: '1 awaiting reply',
    trend: 'stable' as const,
  },
  {
    icon: 'Globe',
    label: 'Uptime',
    value: '99.9%',
    change: 'Last 30 days',
    trend: 'up' as const,
  },
]
