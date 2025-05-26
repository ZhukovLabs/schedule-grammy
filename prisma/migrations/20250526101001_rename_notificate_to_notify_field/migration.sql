/*
  Warnings:

  - You are about to drop the column `notificate` on the `teachers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "notificate",
ADD COLUMN     "notify" BOOLEAN NOT NULL DEFAULT true;
