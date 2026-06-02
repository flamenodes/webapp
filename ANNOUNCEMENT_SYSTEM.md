# Announcement & Notification System Implementation

## Overview
Implemented a comprehensive real-time announcement and notification system with Socket.IO integration and browser notifications.

## Database Changes (schema.prisma)

### Updated Notification Model
- Added `link` field for clickable notifications
- Added `metadata` JSON field for additional data
- Added `createdAt` index for better query performance

### New Announcement Model
- `id`, `title`, `message` - Basic announcement fields
- `type` - Enum: INFO, WARNING, SUCCESS, ERROR, MAINTENANCE
- `active` - Boolean to enable/disable
- `priority` - Integer for ordering (higher = shown first)
- `link` - Optional URL for "Learn more"
- `expiresAt` - Optional expiration date
- Indexed on `active`, `priority`, and `createdAt`

## New Files Created

### 1. `/app/src/lib/browser-notifications.ts`
Browser notification utilities:
- `requestNotificationPermission()` - Request permission
- `showBrowserNotification()` - Display browser notification
- `isNotificationSupported()` - Check browser support
- `getNotificationPermission()` - Get current permission status

### 2. `/app/src/serverActions/notifications.api.ts`
Server actions for notifications and announcements:
- `getActiveAnnouncements()` - Public endpoint for active announcements
- `getAllAnnouncements()` - Admin endpoint for all announcements
- `createAnnouncement()` - Admin create with socket emit
- `updateAnnouncement()` - Admin update
- `deleteAnnouncement()` - Admin delete
- `getUserNotifications()` - Get user's notifications
- `markNotificationRead()` - Mark single as read
- `markAllNotificationsRead()` - Mark all as read
- `createNotification()` - Internal helper with socket emit

### 3. `/app/src/socket/events.ts`
Socket.IO event emitters:
- `setSocketIO()` - Initialize socket server
- `emitNotification()` - Send notification to specific user
- `emitAnnouncement()` - Broadcast announcement to all
- `emitServerUpdate()` - Send server update to user

### 4. `/app/src/hooks/useNotifications.ts`
React hook for real-time notifications:
- Fetches user notifications
- Listens for real-time updates via Socket.IO
- Shows browser notifications
- Shows toast notifications
- Provides mark as read functionality
- Auto-requests notification permission

### 5. `/app/src/hooks/useAnnouncements.ts`
React hook for real-time announcements:
- Fetches active announcements
- Listens for real-time updates via Socket.IO
- Shows toast for new announcements
- Updates cache automatically

### 6. `/app/src/components/AnnouncementBanner.tsx`
Top banner component for announcements:
- Shows highest priority active announcement
- Color-coded by type (info, success, warning, error, maintenance)
- Dismissible per session
- Optional "Learn more" link
- Responsive design

### 7. `/app/src/lib/notification-helpers.ts`
Helper functions for common notifications:
- `notifyServerDeployed()` - Server deployment notification
- `notifyServerSuspended()` - Server suspension notification
- `notifyServerExpiring()` - Expiration warning
- `notifyOrderCompleted()` - Order completion
- `notifyPaymentReceived()` - Payment confirmation

### 8. `/app/src/routes/_protected/admin/announcements.tsx`
Admin page for managing announcements:
- List all announcements
- Create/edit/delete announcements
- Toggle active status
- Set priority, type, expiration
- Real-time updates via socket

## Updated Files

### 1. `/app/prisma/schema.prisma`
- Updated Notification model with new fields
- Added Announcement model and AnnouncementType enum

### 2. `/app/src/components/user/dashboard/NotificationsCard.tsx`
- Now uses `useNotifications` hook
- Real-time updates via Socket.IO
- Click to mark as read
- Click to navigate to link
- "Mark all as read" button
- Shows unread count badge

### 3. `/app/src/routes/__root.tsx`
- Added `AnnouncementBanner` at the top of all pages
- Shows for both authenticated and unauthenticated users

## Features

### Real-Time Updates
- Socket.IO integration for instant notifications
- User-specific notification rooms (`user:${userId}`)
- Broadcast announcements to all connected clients
- Auto-reconnection on disconnect

### Browser Notifications
- Native browser notifications for new alerts
- Auto-request permission on first load
- Clickable notifications that focus window
- Custom icon and badge support

### Announcement System
- System-wide announcements visible to all users
- Priority-based ordering
- Type-based color coding
- Optional expiration dates
- Active/inactive toggle
- Dismissible per session

### Notification System
- User-specific notifications
- Clickable with navigation links
- Mark as read functionality
- Unread count badge
- Toast notifications
- Metadata support for custom data

## Usage Examples

### Creating a Notification (Server-side)
```typescript
import { createNotification } from '@/serverActions/notifications.api'

await createNotification(
  userId,
  'Server Deployed',
  'Your server is now active',
  'success',
  '/user/servers/123',
  { serverId: '123' }
)
```

### Using Notifications (Client-side)
```typescript
import { useNotifications } from '@/hooks/useNotifications'

const { notifications, unreadCount, markAsRead } = useNotifications(userId)
```

### Creating an Announcement (Admin)
```typescript
await createAnnouncement({
  data: {
    title: 'Scheduled Maintenance',
    message: 'System will be down for 2 hours',
    type: 'MAINTENANCE',
    priority: 10,
    expiresAt: '2024-12-31T23:59:59'
  }
})
```

## Next Steps

1. **Run Database Migration**
   ```bash
   cd app
   npx prisma migrate dev --name add_announcements
   npx prisma generate
   ```

2. **Setup Socket.IO Server**
   - Ensure Socket.IO server is running
   - Configure VITE_SOCKET_SERVER_URL environment variable
   - Import and call `setSocketIO()` in your server initialization

3. **Integrate Notification Helpers**
   - Call notification helpers in server deployment logic
   - Add to payment processing
   - Add to order completion
   - Add to server expiration checks

4. **Test**
   - Create test announcements from admin panel
   - Verify real-time updates
   - Test browser notifications
   - Test on multiple devices/browsers

## Environment Variables
```env
VITE_SOCKET_SERVER_URL=http://localhost:4000
```

## Admin Access
Navigate to `/admin/announcements` to manage system announcements.
