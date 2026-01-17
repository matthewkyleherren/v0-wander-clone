/*
  Migration adjusted:

  Originally this migration attempted to drop the `worldId` column and its
  unique index from the `User` table. We keep `worldId` for World ID auth,
  so this migration now only creates the `SiteSettings` table.
*/

-- CreateTable
CREATE TABLE "SiteSettings" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SiteSettings_key_key" ON "SiteSettings"("key");
