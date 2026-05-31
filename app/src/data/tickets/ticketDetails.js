export const ticketDetails = {
    '1': {
        id: '1',
        ticketId: '#FLT-84231',
        title: 'Server Access Issue',
        status: 'open',
        priority: 'high',
        category: 'Technical Support',
        created: 'May 28, 2025',
        lastUpdated: '2 minutes ago',
        user: {
            name: 'Sarah Johnson',
            email: 'sarah.j@example.com',
            plan: 'Pro Plan',
            avatar: 'SJ'
        },
        messages: [
            {
                id: 'm1',
                type: 'incoming',
                content: 'Hi, I\'m unable to access my server dashboard. It keeps showing an authentication error.',
                timestamp: '10:32 AM',
                sender: { name: 'Sarah Johnson', avatar: 'SJ' }
            },
            {
                id: 'm2',
                type: 'outgoing',
                content: 'Hello Sarah! I\'m sorry to hear you\'re experiencing issues. Let me check your account right away.',
                timestamp: '10:33 AM',
                sender: { name: 'Support Agent', avatar: 'SA' }
            },
            {
                id: 'm3',
                type: 'system',
                content: 'Agent marked ticket as High Priority',
                timestamp: '10:33 AM'
            },
            {
                id: 'm4',
                type: 'incoming',
                content: 'Thank you! It\'s been happening since this morning.',
                timestamp: '10:34 AM',
                sender: { name: 'Sarah Johnson', avatar: 'SJ' }
            },
            {
                id: 'm5',
                type: 'outgoing',
                content: 'I can see the issue. It looks like there was a session timeout. I\'m resetting your authentication tokens now.',
                timestamp: '10:35 AM',
                sender: { name: 'Support Agent', avatar: 'SA' }
            }
        ],
        notes: [
            {
                id: 'n1',
                content: 'User reported authentication errors. Investigating session management.',
                author: 'Agent Mike',
                timestamp: '10:33 AM'
            },
            {
                id: 'n2',
                content: 'Reset authentication tokens. Monitoring for resolution.',
                author: 'Agent Mike',
                timestamp: '10:35 AM'
            }
        ]
    },
    '2': {
        id: '2',
        ticketId: '#FLT-84230',
        title: 'Billing Question',
        status: 'pending',
        priority: 'medium',
        category: 'Billing',
        created: 'May 27, 2025',
        lastUpdated: '1 hour ago',
        user: {
            name: 'Michael Chen',
            email: 'michael.c@example.com',
            plan: 'Business Plan',
            avatar: 'MC'
        },
        messages: [
            {
                id: 'm1',
                type: 'incoming',
                content: 'I have a question about my recent invoice. There seems to be a duplicate charge.',
                timestamp: '9:15 AM',
                sender: { name: 'Michael Chen', avatar: 'MC' }
            },
            {
                id: 'm2',
                type: 'outgoing',
                content: 'Thank you for reaching out. Let me review your billing history.',
                timestamp: '9:20 AM',
                sender: { name: 'Support Agent', avatar: 'SA' }
            },
            {
                id: 'm3',
                type: 'system',
                content: 'Ticket escalated to Billing Department',
                timestamp: '9:21 AM'
            }
        ],
        notes: [
            {
                id: 'n1',
                content: 'Escalated to billing team for invoice review.',
                author: 'Agent Sarah',
                timestamp: '9:21 AM'
            }
        ]
    },
    '3': {
        id: '3',
        ticketId: '#FLT-84229',
        title: 'Performance Issue',
        status: 'closed',
        priority: 'low',
        category: 'Technical Support',
        created: 'May 25, 2025',
        lastUpdated: '2 days ago',
        user: {
            name: 'Emma Wilson',
            email: 'emma.w@example.com',
            plan: 'Starter Plan',
            avatar: 'EW'
        },
        messages: [
            {
                id: 'm1',
                type: 'incoming',
                content: 'My website has been loading slowly lately.',
                timestamp: 'May 25, 2:30 PM',
                sender: { name: 'Emma Wilson', avatar: 'EW' }
            },
            {
                id: 'm2',
                type: 'outgoing',
                content: 'I\'ll run a performance analysis on your server.',
                timestamp: 'May 25, 2:35 PM',
                sender: { name: 'Support Agent', avatar: 'SA' }
            },
            {
                id: 'm3',
                type: 'outgoing',
                content: 'I\'ve optimized your cache settings. You should see improved performance now.',
                timestamp: 'May 25, 3:00 PM',
                sender: { name: 'Support Agent', avatar: 'SA' }
            },
            {
                id: 'm4',
                type: 'incoming',
                content: 'Perfect! It\'s much faster now. Thank you!',
                timestamp: 'May 25, 3:15 PM',
                sender: { name: 'Emma Wilson', avatar: 'EW' }
            },
            {
                id: 'm5',
                type: 'system',
                content: 'Ticket marked as Resolved',
                timestamp: 'May 25, 3:16 PM'
            }
        ],
        notes: [
            {
                id: 'n1',
                content: 'Optimized cache configuration. Issue resolved.',
                author: 'Agent Tom',
                timestamp: 'May 25, 3:00 PM'
            }
        ]
    }
};
//# sourceMappingURL=ticketDetails.js.map