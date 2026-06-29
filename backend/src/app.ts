import express, { Request, Response } from 'express';
import cors from 'cors';                          
import { config } from './config/env.js';

// นำเข้า Routes ระบบประวัติการจำหน่ายครุภัณฑ์
import saleRecordRoutes from './routes/sale.router.js';

const app = express();

// Middleware ให้ Express อ่าน JSON ที่หน้าเว็บส่งมาได้
app.use(cors({
  origin: '*',   // ← URL ของ frontend คุณ
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// ==========================================
// 1. API: เช็คสถานะเซิร์ฟเวอร์ (Health Check)
// ==========================================
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'MACS KMUTT API is running!' });
});

// ==========================================
// 2. การผูก Routes (เส้นทาง API หลักของระบบ)
// ==========================================
// ระบบประวัติการจำหน่ายครุภัณฑ์ (Sale Records)
// เมื่อหน้าเว็บเรียก /api/sale-records/... จะวิ่งไปหาไฟล์ saleRecord.routes.ts
app.use('/api/sale-records', saleRecordRoutes);

// ==========================================
// เริ่มรันเซิร์ฟเวอร์
// ==========================================
app.listen(config.port, () => {
  console.log(`🚀 Server is running on http://localhost:${config.port}`);
});