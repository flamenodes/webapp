-- CreateTable
CREATE TABLE "WebSettings" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WebSettings_key_key" ON "WebSettings"("key");

-- CreateIndex
CREATE INDEX "WebSettings_key_idx" ON "WebSettings"("key");
