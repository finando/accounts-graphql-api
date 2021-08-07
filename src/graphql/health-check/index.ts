import prisma from '@app/prisma';

export default async () => await prisma.$queryRaw`SELECT 1`;
