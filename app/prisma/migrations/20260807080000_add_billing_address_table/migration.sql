-- CreateTable: billing_address
CREATE TABLE "billing_address" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "phone" TEXT NOT NULL DEFAULT '',
    "address" TEXT NOT NULL DEFAULT '',
    "city" TEXT NOT NULL DEFAULT '',
    "state" TEXT NOT NULL DEFAULT '',
    "zip" TEXT NOT NULL DEFAULT '',
    "country" TEXT NOT NULL DEFAULT 'India',
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "billing_address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "billing_address_userId_key" ON "billing_address"("userId");
CREATE INDEX "billing_address_userId_idx" ON "billing_address"("userId");

-- AddForeignKey
ALTER TABLE "billing_address" ADD CONSTRAINT "billing_address_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Migrate existing address data from user table into billing_address (only for users who have any address data)
INSERT INTO "billing_address" ("id", "userId", "firstName", "lastName", "phone", "address", "city", "state", "zip", "country", "updatedAt", "createdAt")
SELECT
    gen_random_uuid()::text,
    u.id,
    COALESCE(u.firstname, ''),
    COALESCE(u.lastname, ''),
    COALESCE(u.phone, ''),
    COALESCE(u.address, ''),
    COALESCE(u.city, ''),
    '',
    COALESCE(u.zip, ''),
    COALESCE(u.country, 'India'),
    NOW(),
    NOW()
FROM "user" u
WHERE u.address IS NOT NULL
   OR u.city IS NOT NULL
   OR u.zip IS NOT NULL
   OR u.phone IS NOT NULL
ON CONFLICT ("userId") DO NOTHING;

-- Drop address columns from user table
ALTER TABLE "user"
    DROP COLUMN IF EXISTS "address",
    DROP COLUMN IF EXISTS "city",
    DROP COLUMN IF EXISTS "zip",
    DROP COLUMN IF EXISTS "country",
    DROP COLUMN IF EXISTS "phone";
