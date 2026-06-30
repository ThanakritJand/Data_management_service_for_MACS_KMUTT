import prisma from "../models/prisma";
import { AuctionMethod } from "../generated/prisma";

export const mapThaiAuctionMethodToEnum = (thaiText: string): AuctionMethod => {
  if (thaiText.includes('ประมูลด้วยวาจา')) return AuctionMethod.PUBLIC_VERBAL;
  if (thaiText.includes('เฉพาะเจาะจง')) return AuctionMethod.SPECIFIC;
  if (thaiText.toLowerCase().includes('e-bidding')) return AuctionMethod.E_BIDDING;
  return AuctionMethod.OTHER;
}

export const getAllSaleRecords = async () => {
  return await prisma.equipmentSaleRecord.findMany({
    orderBy: { auctionDate: 'desc' },
  });
}

export const createSaleRecord = async (data: any) => {
  console.log("📦 Data received in service:", data);  // ← เพิ่มบรรทัดนี้
  console.log("👤 responsiblePerson:", data.responsiblePerson); // ← และนี้
  return await prisma.equipmentSaleRecord.create({
    data: {
      title: data.title,
      department: data.department,
      estimatedPrice: data.estimatedPrice,
      soldPrice: data.soldPrice,
      auctionMethod: data.auctionMethod as AuctionMethod, // ต้องเป็น Enum
      auctionDate: new Date(data.auctionDate),
      winnerName: data.winnerName,
      responsiblePerson: data.responsiblePerson,
    },
  });
};

export const importBulkSaleRecords = async (records: any[]) => {
  // สร้าง Array ของข้อมูลที่พร้อมจะเซฟลง Database
  const dataToInsert = records.map((row) => ({
    title: row.title,
    department: row.department,
    estimatedPrice: row.estimatedPrice,
    soldPrice: row.soldPrice,
    // แปลงคำภาษาไทยใน Excel ให้เป็น Enum ที่ Database เข้าใจ
    auctionMethod: mapThaiAuctionMethodToEnum(row.auctionMethod),
    auctionDate: new Date(row.auctionDate),
    winnerName: row.winnerName,
    responsiblePerson: row.responsiblePerson,
  }));

  // บันทึกรวดเดียวลง Database (ใช้ createMany เพื่อความรวดเร็ว)
  const result = await prisma.equipmentSaleRecord.createMany({
    data: dataToInsert,
    skipDuplicates: true, // ข้ามข้อมูลที่ซ้ำกัน (ถ้ามี)
  });

  return result; // คืนค่ากลับไปว่าบันทึกสำเร็จกี่แถว
};