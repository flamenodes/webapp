# Web Settings System - Setup Guide

## Overview
A flexible web settings management system for managing footer, social links, and other site-wide configurations through the admin panel.

## Database Schema
The `WebSettings` model uses a key-value structure with JSON storage for flexibility:
- `key`: Unique identifier (e.g., 'footer', 'social', 'seo')
- `value`: JSON object containing the settings data

## Setup Steps

### 1. Run Database Migration
```bash
cd app
npx prisma migrate dev --name add_web_settings
```

### 2. Seed Initial Footer Data
```bash
npx tsx prisma/seed-footer.ts
```

### 3. Access Admin Panel
Navigate to: `/admin/web-settings`

## Features

### Footer Management
- **Categories**: Create unlimited footer navigation categories
- **Links**: Add/edit/remove links within each category
- **Social Links**: Manage social media links with platform names and URLs
- **Copyright**: Customize copyright text

### Admin Interface
- Tabbed interface for different settings sections
- Real-time preview of changes
- Drag-and-drop reordering (future enhancement)
- Bulk save functionality

## File Structure
```
app/
├── src/
│   ├── serverActions/
│   │   └── web-settings.api.ts          # Server actions for CRUD operations
│   ├── routes/
│   │   └── _protected/admin/
│   │       └── web-settings.tsx         # Admin settings page
│   └── components/
│       └── blocks/
│           └── Footer.tsx               # Updated to use database settings
└── prisma/
    ├── schema.prisma                    # WebSettings model
    └── seed-footer.ts                   # Initial data seeder
```

## API Functions

### Server Actions
- `getAllWebSettings()` - Get all settings (admin)
- `getWebSettingByKey(key)` - Get specific setting
- `updateWebSetting({ key, value })` - Update/create setting
- `getFooterSettings()` - Get footer config (public)

## Data Structure

### Footer Settings (key: 'footer')
```json
{
  "categories": [
    {
      "id": "uuid",
      "title": "Products",
      "links": [
        { "id": "uuid", "label": "VPS Hosting", "url": "/vps" }
      ]
    }
  ],
  "socialLinks": [
    { "id": "uuid", "platform": "Twitter", "url": "https://...", "icon": "Twitter" }
  ],
  "copyrightText": "© 2024 Flame Nodes. All rights reserved."
}
```

## Future Enhancements
- SEO settings tab
- Announcement banner settings
- Theme customization
- Email template settings
- Drag-and-drop reordering
- Import/export settings
