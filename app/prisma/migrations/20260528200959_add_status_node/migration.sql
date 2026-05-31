-- CreateTable
CREATE TABLE "StatusNode" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'VPS',
    "port" INTEGER NOT NULL DEFAULT 80,
    "protocol" TEXT NOT NULL DEFAULT 'http',
    "status" TEXT NOT NULL DEFAULT 'unknown',
    "latency" INTEGER,
    "lastChecked" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StatusNode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StatusNode_status_idx" ON "StatusNode"("status");

-- CreateIndex
CREATE INDEX "StatusNode_createdAt_idx" ON "StatusNode"("createdAt");
