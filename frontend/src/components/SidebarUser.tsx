import { Link } from "react-router-dom"

// import icon 
import { FaHome } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { PiNotePencilBold } from "react-icons/pi";
import { BiImport } from "react-icons/bi";
import { SiGoogledocs } from "react-icons/si";
import { BiSolidCommentAdd } from "react-icons/bi";
import { RiFileEditFill } from "react-icons/ri";
import { SlDocs } from "react-icons/sl";
import { FaUsers } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { AiOutlineAudit } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";

const SidebarUser = () => {
  return (
    <aside className="bg-theme-sidebar text-theme-sidebarText flex flex-col gap-5 px-10 w-70 min-h-screen display:none">
        <h1 className="py-10 text-4xl font-semibold">PAM MACS</h1>
        <ul className="flex flex-col gap-5 my-3">
            <Link to="/user" className="flex items-center gap-2"><FaHome /> <span>หน้าแรก</span></Link>
            <Link to="/" className="flex items-center gap-2"><IoSearchSharp /> <span>ค้นหารายการ</span></Link>
            <Link to="addItem" className="flex items-center gap-2"><TiPlus /> <span>ขอเพิ่มรายการ</span></Link>
            <Link to="/" className="flex items-center gap-2"><PiNotePencilBold /> <span>ขอแก้ไขรายการ</span></Link>
            <Link to="importcenter" className="flex items-center gap-2"><BiImport /> <span>Import Center</span></Link>
            <Link to="/" className="flex items-center gap-2"><SiGoogledocs /> <span>เอกสารอ้างอิง</span></Link>
        </ul>
        
        <ul className="flex flex-col gap-5 my-3">
            <p>สำหรับผุ้อนุมัติ</p>
            <Link to="/" className="flex items-center gap-2"><BiSolidCommentAdd /> <span>อนุมัติรายการใหม่</span></Link>
            <Link to="/" className="flex items-center gap-2"><RiFileEditFill /> <span>อนุมัติแก้ไขรายการ</span></Link>
        </ul>

        <ul className="flex flex-col gap-5 my-3">
            <p>สำหรับผู้ดูแลระบบ</p>
            <Link to="/" className="flex items-center gap-2"><SlDocs /> <span>จัดการข้อมูล</span></Link>
            <Link to="/" className="flex items-center gap-2"><FaUsers /> <span>จัดการผู้ใช้งาน</span></Link>
            <Link to="/" className="flex items-center gap-2"><FaChartBar /> <span>รายงาน</span></Link>
            <Link to="/" className="flex items-center gap-2"><AiOutlineAudit /> <span>Audit Log</span></Link>
            <Link to="/" className="flex items-center gap-2"><IoIosSettings /> <span>ตั้งค่าระบบ</span></Link>
        </ul>
    </aside>
  )
}

export default SidebarUser