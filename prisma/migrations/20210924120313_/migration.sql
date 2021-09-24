/*
  Warnings:

  - You are about to drop the column `balance` on the `BudgetAccount` table. All the data in the column will be lost.
  - You are about to drop the column `balance` on the `TrackingAccount` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "BudgetAccount" RENAME COLUMN "balance" TO "initialBalance";

-- AlterTable
ALTER TABLE "TrackingAccount" RENAME COLUMN "balance" TO"initialBalance";
