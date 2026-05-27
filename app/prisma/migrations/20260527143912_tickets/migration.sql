-- CreateTable
CREATE TABLE "TicketTagPreset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TicketTagPreset_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TicketTagPreset_name_key" ON "TicketTagPreset"("name");

-- CreateIndex
CREATE INDEX "TicketTagPreset_name_idx" ON "TicketTagPreset"("name");

-- CreateIndex
CREATE INDEX "TicketTagPreset_createdAt_idx" ON "TicketTagPreset"("createdAt");
