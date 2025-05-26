/*
  Warnings:

  - You are about to drop the column `disabled` on the `teachers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "teachers" DROP COLUMN "disabled",
ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "notificate" BOOLEAN NOT NULL DEFAULT true;
