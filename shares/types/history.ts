// import { EntityType, HistoryStatus } from "./Enum"

// export interface ExcelImportHistory {
//     id: string
//     importBy: string
//     fileName: string
//     totalRows: number
//     successfulRows: number
//     failedRows: number
//     importDate: Date
// }

// export interface OperationHistory {
//     id: string
//     userId: string
//     action: HistoryStatus
//     entityType: EntityType
//     entityId: string
//     description: string
//     timeStamp: Date
// }

// ดึง Type ต้นฉบับมาจาก Prisma (ที่อยู่ใน backend/generated/prisma)
// *หมายเหตุ: ตรวจสอบ path ให้ตรงกับโครงสร้างโฟลเดอร์ของคุณนะครับ
import type { 
    ExcelImportHistory as PrismaExcelImport, 
    OperationHistory as PrismaOperation,
    HistoryStatus,
    EntityType
} from '../../backend/generated/';

// 1. Export Enum ให้หน้าบ้านเรียกใช้ได้
export { HistoryStatus, EntityType };

// 2. Export Type ให้ตรงกับ Database 100%
export type ExcelImportHistory = PrismaExcelImport;
export type OperationHistory = PrismaOperation;

/* ผลลัพธ์ที่หน้าบ้าน (Frontend) จะมองเห็นคือ:
  type ExcelImportHistory = {
      id: number;
      fileName: string;
      totalRows: number;
      successfulRows: number;
      failedRows: number;
      importDate: Date;
      importedById: number;
  }
*/

// 3. (Optional) ถ้าคุณต้องการสร้าง DTO สำหรับรับข้อมูลมาบันทึกใหม่
// (เช่น รับมาแค่บางค่า ส่วน id, importDate ให้ Database สร้างเอง)
export type CreateOperationHistoryDTO = Omit<
    OperationHistory, 
    'id' | 'timestamp'
>;