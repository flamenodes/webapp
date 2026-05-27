# Ticket System Backend Implementation

## Overview
The ticket system backend has been fully implemented and integrated with the existing frontend design. The system supports real-time updates via WebSocket and provides a complete support ticket workflow.

## Features Implemented

### 1. Database Schema (Prisma)
- **Ticket** model with status, priority, and assignment tracking
- **TicketMessage** model for chat messages
- **TicketCounter** for auto-incrementing ticket IDs
- **TicketTagPreset** for reusable tags
- Proper indexing for performance
- Relationships with User model

### 2. API Endpoints (Server Actions)

#### Ticket Management
- `createTicket` - Create new support tickets
- `listTickets` - List tickets with filtering (status, priority, search, assignment)
- `getTicket` - Get single ticket with all messages
- `updateTicket` - Update ticket status, priority, assignment, tags
- `sendTicketMessage` - Send messages in ticket thread

#### Support Features
- `listSupportAgents` - Get available support staff
- `listTicketTagPresets` - Get tag presets
- `upsertTicketTagPreset` - Create/update tag presets
- `deleteTicketTagPreset` - Remove tag presets

### 3. Frontend Components Updated

#### TicketSidebar
- Fetches real tickets from API
- Filters by status (all, open, pending, closed)
- Search functionality
- Real-time ticket counts
- Loading states

#### ChatPanel
- Displays ticket messages
- Send new messages
- Resolve tickets
- Real-time updates via WebSocket
- Loading and error states

#### ChatComposer
- Message input with send callback
- Enter key to send
- Disabled state when empty

#### Admin Tickets Page
- View all tickets (staff only)
- Select and view ticket details
- Context panel with ticket info
- Responsive layout

#### User Tickets Page
- View own tickets
- Create new tickets via dialog
- Select and chat in tickets
- Empty state with CTA

### 4. Real-time Updates
- WebSocket integration via socket.io
- Auto-refresh on new messages
- Auto-refresh on ticket updates
- Optimistic UI updates

### 5. Permissions & Security
- Role-based access (USER, SUPPORT, ADMIN)
- Staff can view all tickets
- Users can only view their own tickets
- Proper authentication checks
- Input validation with Zod schemas

## API Usage Examples

### Create a Ticket
```typescript
const result = await createTicket({
  data: {
    title: 'Server Access Issue',
    description: 'Cannot access my server dashboard',
    priority: 'HIGH',
    channelName: 'technical-support',
    tags: ['server', 'access'],
  }
})
```

### List Tickets
```typescript
const result = await listTickets({
  data: {
    status: 'OPEN',
    priority: 'HIGH',
    search: 'server',
    take: 50,
    skip: 0,
  }
})
```

### Send Message
```typescript
const result = await sendTicketMessage({
  data: {
    ticketId: 'TICK-0001',
    content: 'I have checked and the issue persists',
  }
})
```

### Update Ticket
```typescript
const result = await updateTicket({
  data: {
    ticketId: 'TICK-0001',
    status: 'RESOLVED',
    assignedToId: 'user-id-123',
  }
})
```

## Database Migration

Run the following to apply the ticket system schema:

```bash
cd app
pnpm db:push
# or
pnpm prisma migrate dev
```

## Environment Variables

Add to your `.env` file:

```env
# Socket Server (for real-time updates)
SOCKET_SERVER_URL=http://localhost:4000
SOCKET_SERVER_SECRET=your-secret-key

# Client-side (in .env.local or vite config)
VITE_SOCKET_URL=http://localhost:4000
```

## Testing the System

### 1. Create a Test Ticket
Navigate to `/user/tickets` and click "New Ticket"

### 2. View as Admin
Navigate to `/admin/tickets` to see all tickets

### 3. Send Messages
Select a ticket and type messages in the chat composer

### 4. Update Status
Click "Resolve" button to mark ticket as resolved

## File Structure

```
app/src/
├── serverActions/tickets/
│   └── tickets.api.ts          # All API endpoints
├── components/tickets/
│   ├── ChatPanel.tsx            # Main chat view (updated)
│   ├── TicketSidebar.tsx        # Ticket list (updated)
│   ├── ChatComposer.tsx         # Message input (updated)
│   ├── ChatTopBar.tsx           # Ticket header
│   ├── TicketContextPanel.tsx  # Ticket details sidebar
│   └── ...other components
├── routes/_protected/
│   ├── admin/tickets.tsx        # Admin view (updated)
│   └── user/tickets.tsx         # User view (updated)
└── lib/socket/
    └── useTicketSocket.ts       # Real-time hook (new)
```

## Next Steps

### Optional Enhancements
1. File attachments for messages
2. Email notifications
3. Ticket templates
4. SLA tracking
5. Canned responses
6. Ticket merging
7. Internal notes (staff only)
8. Ticket history/audit log
9. Advanced search filters
10. Export tickets to CSV

### Performance Optimizations
1. Implement pagination for messages
2. Add message caching
3. Optimize database queries with proper indexes
4. Add rate limiting for ticket creation

## Troubleshooting

### Tickets not loading
- Check database connection
- Verify Prisma schema is migrated
- Check browser console for errors

### Real-time updates not working
- Verify socket server is running
- Check SOCKET_SERVER_URL environment variable
- Ensure socket.io-client is installed

### Permission errors
- Verify user role in database
- Check auth session is valid
- Review STAFF_ROLES constant in tickets.api.ts

## Support

For issues or questions, create a ticket in the system! 😄
