export interface Ticket {
  id: string
  title: string
  status: 'all' | 'open' | 'closed' | 'pending'
  lastMessage: string
  timestamp: string
  unread?: boolean
  priority?: 'high' | 'normal' | 'low'
  avatar?: string
}

export const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Server Access Issue',
    status: 'open',
    lastMessage: 'Got it. I\'m checking your account now. One moment please...',
    timestamp: '2m',
    unread: true,
    priority: 'high',
    avatar: 'SA'
  },
  {
    id: '2',
    title: 'Billing Question',
    status: 'pending',
    lastMessage: 'Thank you for the information. Let me verify this with our billing team.',
    timestamp: '1h',
    priority: 'normal',
    avatar: 'BT'
  },
  {
    id: '3',
    title: 'Performance Issue',
    status: 'closed',
    lastMessage: 'Issue resolved. Thank you for your patience!',
    timestamp: '2d',
    avatar: 'PI'
  },
  {
    id: '4',
    title: 'Feature Request',
    status: 'open',
    lastMessage: 'We\'ll consider this for our next update cycle.',
    timestamp: '3d',
    priority: 'normal',
    avatar: 'FR'
  },
  {
    id: '5',
    title: 'Account Upgrade',
    status: 'pending',
    lastMessage: 'Your upgrade request is being processed.',
    timestamp: '5d',
    avatar: 'AU'
  },
  {
    id: '6',
    title: 'Technical Support',
    status: 'open',
    lastMessage: 'Can you provide more details about the error message?',
    timestamp: '1w',
    unread: true,
    priority: 'high',
    avatar: 'TS'
  }
]
