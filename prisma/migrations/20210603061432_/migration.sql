/*
  Warnings:

  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "BudgetAccountType" AS ENUM ('CHECKING', 'SAVINGS', 'CASH', 'CREDIT_CARD', 'LINE_OF_CREDIT');

-- CreateEnum
CREATE TYPE "TrackingAccountType" AS ENUM ('ASSET', 'LIABILITY');

-- DropTable
DROP TABLE "Account";

-- CreateTable
CREATE TABLE "BudgetAccount" (
    "id" TEXT NOT NULL,
    "type" "BudgetAccountType" NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "currency" "Currency" NOT NULL DEFAULT E'NOK',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackingAccount" (
    "id" TEXT NOT NULL,
    "type" "TrackingAccountType" NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT,
    "balance" DOUBLE PRECISION NOT NULL DEFAULT 0.00,
    "currency" "Currency" NOT NULL DEFAULT E'NOK',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
