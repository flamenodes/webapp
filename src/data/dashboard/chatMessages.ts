export interface Message {
  id: string
  type: 'incoming' | 'outgoing'
  content: string
  timestamp: string
  sender?: {
    name: string
    avatar?: string
  }
}

export const mockMessages: Message[] = [
  {
    id: '1',
    type: 'incoming',
    content: 'Hi there! Welcome to FlameNodes support. How can I help you today?',
    timestamp: '10:32 AM',
    sender: {
      name: 'Support Agent',
      avatar: 'SA'
    }
  },
  {
    id: '2',
    type: 'outgoing',
    content: 'Hello! I\'m having trouble accessing my server dashboard.',
    timestamp: '10:33 AM'
  },
  {
    id: '3',
    type: 'incoming',
    content: 'I understand. Let me help you with that. Can you tell me which server you\'re trying to access?',
    timestamp: '10:33 AM',
    sender: {
      name: 'Support Agent',
      avatar: 'SA'
    }
  },
  {
    id: '4',
    type: 'outgoing',
    content: 'It\'s the Minecraft server I set up last week.',
    timestamp: '10:34 AM'
  },
  {
    id: '5',
    type: 'incoming',
    content: 'Got it. I\'m checking your account now. One moment please...',
    timestamp: '10:34 AM',
    sender: {
      name: 'Support Agent',
      avatar: 'SA'
    }
  }
]
