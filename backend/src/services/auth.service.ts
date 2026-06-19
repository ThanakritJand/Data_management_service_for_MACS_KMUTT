// import { Prisma } from "../../generated/prisma/client";
// import { generateToken } from "../utils/userToken";
// import { config } from "dotenv";
// import { UserRole } from "../../generated/prisma/client";
// import { prisma } from "../../lib/prisma";

// export const loginWithKmutt = async(username: string , password: string) => {
//     const response = await fetch("" , {
//         method: "POST" ,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//     })

//     if (!response.ok) {
//         throw new Error('ชื่อผู้ใช้งานหรือรหัสผ่านจากระบบกลางไม่ถูกต้อง')
//     }

//     const kmuttApi = (await response.json()) as {
//         email: string; 
//         name: string; 
//     };
//     const email = kmuttApi.email;

//     let user = await prisma.user.findUnique({
//         where: { email: email },
//     })

//     if(!user) {
//         const createUser = await prisma.user.create({
//             data: {
//                 email: email ,
//                 name: kmuttApi.name ,
//                 role: UserRole.USER ,
//                 password:''
//             }
//         })
//     }

//     const token = generateToken({
//         id: user.id,
//     e  mail: user.email,
//     password: user.password, // เพิ่ม password เพื่อให้ตรงกับ Type ที่ต้องการ
//     role: user.role as string, // แปลงเป็น string เพื่อหลีกเลี่ยง Type Error
//   });

//   // 5. ส่งข้อมูลกลับไปให้ Controller
//   return {
//     user: {
//       id: user.id,
//       email: user.email,
//       name: user.name,
//       role: user.role,
//     },
//     token,
//   };}