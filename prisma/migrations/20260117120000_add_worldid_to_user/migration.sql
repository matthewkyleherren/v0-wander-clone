-- Add worldId field to User for World ID primary login
ALTER TABLE "User"
ADD COLUMN "worldId" TEXT UNIQUE;