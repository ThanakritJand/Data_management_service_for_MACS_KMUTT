import { PrismaClient } from "../../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg"; // @prisma/adapter-pg มักจะต้องใช้คู่กับ pg Pool

// เทคนิค Global Object: ป้องกันไม่ให้ระบบสร้าง Prisma Client ซ้ำหลายรอบ
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// ฟังก์ชันสร้าง Prisma Client พร้อม Adapter
const createPrismaClient = () => {
  // สร้างการเชื่อมต่อด้วย Pool และ Adapter ตามฟีเจอร์ที่คุณใช้งานอยู่
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  
  // โยน adapter เข้าไป เท่านี้ Error บังคับใส่ Argument ก็จะหายไปครับ!
  return new PrismaClient({ adapter });
};

// นำมาใช้งาน
export const prisma = globalForPrisma.prisma || createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;