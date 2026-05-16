export const dashboardStats = [
  {
    icon: 'DollarSign',
    label: 'Total Revenue',
    value: '$12,456.78',
    change: '+12.3% this month',
    trend: 'up' as const,
    progress: null,
    action: null,
    sparkline: [42, 55, 48, 62, 58, 71, 65, 78, 72, 88],
  },
  {
    icon: 'Server',
    label: 'Active Servers',
    value: '128',
    change: '+8 this week',
    trend: 'up' as const,
    progress: null,
    action: null,
    sparkline: null,
  },
  {
    icon: 'Globe',
    label: 'Online Nodes',
    value: '7 / 9',
    change: '77% online',
    trend: 'stable' as const,
    progress: 77,
    action: null,
    sparkline: null,
  },
  {
    icon: 'ShoppingCart',
    label: 'Pending Orders',
    value: '5',
    change: 'Requires attention',
    trend: 'warning' as const,
    progress: null,
    action: 'View Orders',
    sparkline: null,
  },
  {
    icon: 'LifeBuoy',
    label: 'Open Tickets',
    value: '12',
    change: '3 waiting reply',
    trend: 'warning' as const,
    progress: null,
    action: 'View Tickets',
    sparkline: null,
  },
]

export const serverStatus = [
  { status: 'Online', count: 189, color: 'var(--chart-1)' },
  { status: 'Maintenance', count: 38, color: 'var(--chart-2)' },
  { status: 'Offline', count: 20, color: '#fb7185' },
]

export const recentActivity = [
  {
    id: 1,
    type: 'new',
    message: 'New server deployed',
    detail: 'node-us-east-01',
    time: '2m ago',
    badge: 'Deployed',
  },
  {
    id: 2,
    type: 'warning',
    message: 'High CPU usage detected',
    detail: 'node-eu-west-03',
    time: '8m ago',
    badge: 'Warning',
  },
  {
    id: 3,
    type: 'payment',
    message: 'Payment received',
    detail: '$2,450.00',
    time: '15m ago',
    badge: 'Payment',
  },
  {
    id: 4,
    type: 'system',
    message: 'Backup completed',
    detail: 'All nodes',
    time: '1h ago',
    badge: 'System',
  },
  {
    id: 5,
    type: 'new',
    message: 'User registered',
    detail: 'premium plan',
    time: '2h ago',
    badge: 'New',
  },
  {
    id: 6,
    type: 'warning',
    message: 'SSL cert expiring',
    detail: 'node-ap-south-01',
    time: '3h ago',
    badge: 'Alert',
  },
]

export const alerts = [
  {
    id: 1,
    severity: 'critical',
    message: 'node-eu-west-03 CPU at 94%',
    time: '3m ago',
  },
  {
    id: 2,
    severity: 'warning',
    message: 'SSL certificate expires in 7 days',
    time: '1h ago',
  },
  {
    id: 3,
    severity: 'critical',
    message: 'node-eu-central-02 unreachable',
    time: '2h ago',
  },
]

export const nodeData = [
  {
    name: 'node-us-east-01',
    location: 'New York',
    status: 'online',
    servers: 42,
    cpu: 68,
    memory: 72,
  },
  {
    name: 'node-us-west-02',
    location: 'Los Angeles',
    status: 'online',
    servers: 38,
    cpu: 54,
    memory: 61,
  },
  {
    name: 'node-eu-west-03',
    location: 'London',
    status: 'online',
    servers: 51,
    cpu: 82,
    memory: 78,
  },
  {
    name: 'node-ap-south-01',
    location: 'Singapore',
    status: 'online',
    servers: 29,
    cpu: 45,
    memory: 52,
  },
  {
    name: 'node-eu-central-02',
    location: 'Frankfurt',
    status: 'offline',
    servers: 0,
    cpu: 0,
    memory: 0,
  },
  {
    name: 'node-us-central-01',
    location: 'Chicago',
    status: 'maintenance',
    servers: 18,
    cpu: 12,
    memory: 30,
  },
]

export const resourceUsage = [
  { label: 'CPU', value: 64 },
  { label: 'Memory', value: 72 },
  { label: 'Network', value: 48 },
]

export const quickActions = [
  { icon: 'Plus', label: 'Deploy Server' },
  { icon: 'RefreshCw', label: 'Restart Node' },
  { icon: 'Shield', label: 'Run Audit' },
  { icon: 'Download', label: 'Backup Now' },
]

export const navItems = [
  {
    icon: 'LayoutDashboard',
    label: 'Dashboard',

    active: true,
    section: 'main',
  },
  { icon: 'Server', label: 'Servers', active: false, section: 'main' },
  { icon: 'Users', label: 'Customers', active: false, section: 'management' },
  {
    icon: 'ShoppingCart',
    label: 'Orders',
    active: false,
    section: 'management',
  },
  {
    icon: 'CreditCard',
    label: 'Billing',
    active: false,
    section: 'management',
  },
  {
    icon: 'BarChart2',
    label: 'Analytics',
    active: false,
    section: 'management',
  },
  { icon: 'Ticket', label: 'Tickets', active: false, section: 'support' },
  {
    icon: 'Megaphone',
    label: 'Announcements',
    active: false,
    section: 'support',
  },
  {
    icon: 'BookOpen',
    label: 'Knowledgebase',
    active: false,
    section: 'support',
  },
  { icon: 'Activity', label: 'Status Page', active: false, section: 'support' },
  { icon: 'UserRound', label: 'Roles', active: false, section: 'system' },
  { icon: 'Settings', label: 'Settings', active: false, section: 'system' },
]
