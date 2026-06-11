# Documentation System Setup Guide

## Issue: Blank Page on `/docs/terms-and-conditions`

The page appears blank because **the document doesn't exist in the database yet**.

## Solution: Create the Document

### Step 1: Access Admin Panel
1. Start your development server: `cd app && pnpm dev`
2. Navigate to: `http://localhost:3000/admin/documents`

### Step 2: Create New Document
1. Click **"Create Document"** button
2. Fill in the form:
   - **Title**: Terms and Conditions
   - **Slug**: `terms-and-conditions`
   - **Description**: (Optional) Our terms and conditions
   - **Content**: Add your markdown content

### Step 3: Save and Publish
1. Click **"Save Draft"** to save your work
2. Click **"Publish"** when ready to make it public

### Step 4: View Your Document
1. Navigate to: `http://localhost:3000/docs/terms-and-conditions`
2. Your document should now be visible!

## Features Implemented

### ✅ Admin Editor
- **React Markdown Editor Lite** with live preview
- **Markdown-it** parser for rendering
- Full CRUD operations (Create, Read, Update, Delete)
- Draft/Published status
- Auto-save functionality

### ✅ Public Docs Page
- **Markdown-it** parser for rendering
- **Auto-generated sidebar** from H1 headings
- **Responsive layout** (sidebar hidden on mobile)
- **Proper padding** (pt-24) for fixed header
- **Loading states** with suspense
- **Error handling** for missing documents

### ✅ Database Integration
- All content stored in PostgreSQL via Prisma
- Real-time query invalidation
- Proper error handling and logging

## Console Debugging

When you access the pages, check the browser console for:

### Admin Editor Page
```
📄 Document loaded from DB: {id, title, slug, status, contentLength}
💾 Saving document to DB: {id, title, slug, status, contentLength}
✅ Document saved successfully: {success, message, res}
```

### Public Docs Page
```
🔍 Fetching document with slug: terms-and-conditions
📦 Server response: {resData, success}
📝 Public docs loaded from DB: {slug, found, title, status, contentLength}
```

### Server Logs
```
🔍 Server: Fetching document with slug: terms-and-conditions
📦 Server: Found document: Title (id) or null
```

## Database Schema

```prisma
model PageDocument {
  id          String     @id @default(uuid())
  slug        String     @unique
  title       String
  description String     @default("")
  content     String     @default("")
  status      PageStatus @default(DRAFT)
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt
}
```

## Troubleshooting

### Page is still blank
1. Check browser console for errors
2. Verify document exists in database
3. Check document status is "PUBLISHED"
4. Ensure slug matches exactly (case-sensitive)

### Document not saving
1. Check browser console for error messages
2. Verify database connection
3. Check server logs for Prisma errors

### Sidebar not showing
1. Make sure you have H1 headings in your markdown
2. Format: `# Heading Text`
3. Sidebar only shows on large screens (lg+)

## Quick Test

Create a test document with this content:

```markdown
# Introduction

Welcome to our terms and conditions.

# User Agreement

By using our services, you agree to...

# Privacy Policy

We respect your privacy...

# Contact

For questions, contact us at...
```

This will create a sidebar with 4 sections!
