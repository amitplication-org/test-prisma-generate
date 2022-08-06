/*
  Warnings:

  - You are about to drop the column `gradesId` on the `Test` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[gradeId]` on the table `Test` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Test" DROP CONSTRAINT "Test_gradesId_fkey";

-- DropIndex
DROP INDEX "Test_gradesId_key";

-- AlterTable
ALTER TABLE "Test" DROP COLUMN "gradesId",
ADD COLUMN     "gradeId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Test_gradeId_key" ON "Test"("gradeId");

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_gradeId_fkey" FOREIGN KEY ("gradeId") REFERENCES "Grade"("id") ON DELETE SET NULL ON UPDATE CASCADE;
