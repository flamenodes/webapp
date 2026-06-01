-- CreateEnum
CREATE TYPE "AnnouncementType" AS ENUM ('INFO', 'WARNING', 'SUCCESS', 'ERROR', 'MAINTENANCE');

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "link" TEXT,
ADD COLUMN     "metadata" JSONB;

-- AlterTable
ALTER TABLE "RazorpayConfig" ADD COLUMN     "pteroNodeId" INTEGER,
ADD COLUMN     "pteroNodeMode" TEXT DEFAULT 'balance';

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "phone" TEXT;

-- CreateTable
CREATE TABLE "Announcement" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "type" "AnnouncementType" NOT NULL DEFAULT 'INFO',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "priority" INTEGER NOT NULL DEFAULT 0,
    "link" TEXT,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Announcement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Announcement_active_idx" ON "Announcement"("active");

-- CreateIndex
CREATE INDEX "Announcement_priority_idx" ON "Announcement"("priority");

-- CreateIndex
CREATE INDEX "Announcement_createdAt_idx" ON "Announcement"("createdAt");

-- CreateIndex
CREATE INDEX "Notification_createdAt_idx" ON "Notification"("createdAt");
