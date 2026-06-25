# Admin Order Deployment Feature

## Overview
Added a deployment feature in the admin panel's order table that allows admins to deploy orders with "PAID" status. The deployment method depends on the product's `deployMode` setting.

## Features Implemented

### 1. Deploy Button in Order Table
- Added "Deploy" action button in the order table dropdown menu
- Only visible for orders with status "PAID"
- Located in: `/app/src/components/admin/orders/OrdersDataTable.tsx`

### 2. Deployment Modal (`DeployOrderDialog`)
- **Location**: `/app/src/components/admin/orders/DeployOrderDialog.tsx`
- Shows product specifications
- Handles two deployment modes:

#### PTERODACTYL Mode
- Automatically deploys via queue system
- Shows deployment mode badge
- One-click deployment to start queue processing
- Updates order status to "PROCESSING" → "DELIVERED" automatically

#### CUSTOM Mode
- Manual deployment interface
- Admin can fill in:
  - Server Name (required)
  - Panel URL (optional)
  - Username (optional)
  - Password (optional)
  - Delivery Message (required) - supports special button syntax
- Live preview of the message with rendered buttons
- Updates order status directly to "DELIVERED"

### 3. Button Syntax in Messages
- Format: `:button:Label:URL`
- Example: `:button:Access Panel:https://panel.example.com`
- Multiple buttons supported in one message
- Utility functions in: `/app/src/lib/parse-deployment-message.tsx`
  - `parseDeploymentMessage()` - Parses message string
  - `RenderDeploymentMessage` - React component to render parsed message

### 4. Server Actions
- **Location**: `/app/src/serverActions/admin/orders.api.ts`

#### `deployOrder`
- Validates order is in PAID status
- Creates server record with PROCESSING status
- Adds deployment job to queue (for PTERODACTYL mode)
- Updates order status to PROCESSING

#### `deployCustomOrder`
- Validates order is in PAID status
- Creates server record with ACTIVE status
- Stores panel URL, username, password in pterodactylData
- Saves custom delivery message
- Updates order status to DELIVERED immediately

### 5. Integration in Admin Orders Page
- **Location**: `/app/src/routes/_protected/admin/orders.tsx`
- Added mutations for both deployment types
- Integrated DeployOrderDialog component
- Handles deployment success/error states with toast notifications

## Database Changes
No schema changes required. Uses existing fields:
- `Product.deployMode` - determines deployment method
- `Product.specs` - stores product specifications
- `Order.deliveryMessage` - stores custom deployment message
- `Order.deliveryData` - stores deployment metadata
- `Server.pterodactylData` - stores panel credentials for custom deployments

## User Flow

### For PTERODACTYL Deployment:
1. Admin clicks "Deploy" on a PAID order
2. Modal shows product specs and PTERODACTYL badge
3. Admin clicks "Deploy to Queue"
4. Server record created with status "PROCESSING"
5. Job added to deployment queue
6. Background worker handles Pterodactyl deployment
7. Order status updated to "DELIVERED" automatically

### For CUSTOM Deployment:
1. Admin clicks "Deploy" on a PAID order
2. Modal shows product specs and CUSTOM badge
3. Admin fills in server details (name, panel URL, credentials)
4. Admin writes deployment message with optional `:button:` syntax
5. Live preview shows how message will look
6. Admin clicks "Deploy & Notify"
7. Server record created with status "ACTIVE"
8. Order status updated to "DELIVERED"
9. Customer sees message with clickable buttons in their order details

## Example Message with Buttons
```
Your server has been deployed successfully! 🎉

:button:Access Panel:https://panel.example.com
:button:Documentation:https://docs.example.com

Your credentials have been sent separately. If you need help, contact support.
```

## Security Considerations
- Only ADMIN and OWNER roles can deploy orders
- Validates order status before deployment
- Prevents duplicate deployments (checks if server already exists)
- Panel credentials stored securely in database
- Button URLs validated during parsing

## Future Enhancements
- Email notifications with rendered buttons
- Deployment history tracking
- Rollback functionality
- Bulk deployment support
- Custom deployment templates
