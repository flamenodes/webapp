-- CreateTable
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
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "billing_address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "billing_address_userId_key" ON "billing_address"("userId");

-- AddForeignKey
ALTER TABLE "billing_address" ADD CONSTRAINT "billing_address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Migrate existing address data from user table
INSERT INTO "billing_address" ("id", "userId", "firstName", "lastName", "phone", "address", "city", "state", "zip", "country", "updatedAt")
SELECT
    gen_random_uuid()::text,
    id,
    COALESCE(firstname, ''),
    COALESCE(lastname, ''),
    COALESCE(phone, ''),
    COALESCE(address, ''),
    COALESCE(city, ''),
    COALESCE(state, ''),
    COALESCE(zip, ''),
    COALESCE(country, 'India'),
    NOW()
FROM "user"
WHERE address IS NOT NULL OR city IS NOT NULL OR state IS NOT NULL OR zip IS NOT NULL OR phone IS NOT NULL;

-- DropColumns
ALTER TABLE "user" DROP COLUMN IF EXISTS "address";
ALTER TABLE "user" DROP COLUMN IF EXISTS "city";
ALTER TABLE "user" DROP COLUMN IF EXISTS "state";
ALTER TABLE "user" DROP COLUMN IF EXISTS "zip";
ALTER TABLE "user" DROP COLUMN IF EXISTS "country";
ALTER TABLE "user" DROP COLUMN IF EXISTS "phone";
