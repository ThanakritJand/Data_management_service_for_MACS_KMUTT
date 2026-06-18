import express, { Request, Response } from 'express';
// import cors from 'cors'; // เดี๋ยวค่อยลงแพ็กเกจแล้วเปิดใช้งานตอนต่อกับ Frontend
import { prisma } from '../lib/prisma';

// เปลี่ยนมาดึง UserRole จาก Prisma โดยตรง เพื่อหลีกเลี่ยงปัญหา rootDir ข้ามโฟลเดอร์
import { UserRole } from '../generated/prisma/enums'; 

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware ให้ Express อ่าน JSON ที่ส่งมาจากหน้าบ้านได้
// app.use(cors());
app.use(express.json());

// -------------------------------------
// 1. API: เช็คสถานะเซิร์ฟเวอร์
// -------------------------------------
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'MACS KMUTT API is running!' });
});

// -------------------------------------
// 2. API: สร้างผู้ใช้งานใหม่ (Register / Create User)
// -------------------------------------
app.post('/api/users', async (req: Request, res: Response) => {
  try {
    const { email, password, name, role } = req.body;

    // เช็คว่ามีอีเมลนี้อยู่ในระบบหรือยัง
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      res.status(400).json({ error: 'อีเมลนี้ถูกใช้งานไปแล้ว' });
      return;
    }

    // สร้าง User ลงใน Database 
    // (หมายเหตุ: ในระบบจริง ก่อนเซฟต้องเอา password ไปเข้ารหัส (Hash) ด้วย bcrypt ก่อนนะครับ)
    const newUser = await prisma.user.create({
      data: {
        email,
        password: password, 
        name,
        role: role || UserRole.USER, // ถ้าไม่ได้ส่ง role มา ให้เป็น USER เป็นค่าเริ่มต้น
      },
    });

    // ตัด password ออกก่อนส่งข้อมูลกลับไปให้หน้าบ้านเพื่อความปลอดภัย
    const { password: _, ...userProfile } = newUser;

    res.status(201).json({
      message: 'สร้างผู้ใช้งานสำเร็จ',
      data: userProfile,
    });
    
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'เกิดข้อผิดพลาดที่ฝั่งเซิร์ฟเวอร์' });
  }
});

// เริ่มรันเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});