import { FaBars } from "react-icons/fa6";
import SidebarUser from "./SidebarUser";
import { useState } from "react";
import { Outlet } from "react-router-dom"; // อย่าลืม Import Outlet มาด้วยนะครับ

const NavbarUser = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        // 1. กล่องแม่สุดครอบด้วย theme_macs และจัด Layout แบบ flex ซ้าย-ขวา [cite: 82]
        <div className="theme_macs flex min-h-screen bg-base-bg text-text-main">
            
            {/* 2. ส่วน Sidebar: ใช้ condition สลับคลาส hidden / block  */}
            <div className={`${isSidebarOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                <SidebarUser />
            </div>

            {/* 3. ส่วนเนื้อหาหลักด้านขวา [cite: 82] */}
            <main className="flex-1 flex flex-col w-full overflow-hidden">
                
                {/* แถบ Top Navbar ด้านบน */}
                <header className="bg-base-surface h-16 border-b border-base-border flex items-center px-6 shadow-sm justify-between">
                    {/* ปุ่ม Burger Button สำหรับเปิด/ปิด Sidebar */}
                    <button 
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                        className="text-2xl text-theme-primary hover:text-theme-hover transition-colors p-2 rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                        <FaBars />
                    </button>
                    <section>
                    <h2 className="ml-4 font-semibold text-lg">PAM MACS (User Zone)</h2>
                    </section>
                </header>

                {/* 4. พื้นที่เจาะช่องสำหรับแสดงหน้าเว็บย่อย (Homepage, Search, etc.)  */}
                <div className="p-8 flex-1 overflow-auto">
                    <Outlet />
                </div>

            </main>
        </div>
    );
}

export default NavbarUser;