/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `digimons` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `digimons_name_key` ON `digimons`(`name`);
