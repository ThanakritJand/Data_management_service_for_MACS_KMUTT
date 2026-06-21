import React from "react";
import { BrowserRouter , Routes , Route , Navigate } from "react-router-dom";

// page
import Home from "./pages/public/Home";
import Homepage from "./pages/user/Homepage";
import AddItemPage from "./pages/user/addItemPage";
import ExcelImportPage from "./pages/user/ExcelImportPage";

function App (){
  return (
    <BrowserRouter>
      <Routes>
        
        {/* ======================================= */}
        {/* 1. Public Zone (หน้าทั่วไป) */}
        {/* ======================================= */}
        <Route path="/" element={<Home />}/>


        {/* ======================================= */}
        {/* 2. User Zone (ครอบด้วย Layout ที่มี Sidebar) */}
        {/* ======================================= */}
        {/* URL ที่ขึ้นต้นด้วย /user จะถูกครอบด้วย NavbarUser ทั้งหมด [cite: 90] */}
        <Route path="/user" element={<Homepage />}>
          <Route path="addItem" element={<AddItemPage />}/>
          <Route path="importcenter" element={<ExcelImportPage />}/>
          {/* ตัวลูก: เนื้อหาเหล่านี้จะไปโผล่ตรงตำแหน่ง <Outlet /> ในไฟล์ NavbarUser [cite: 87, 89] */}
          {/* <Route index element={<Dashboard />} /> */}            {/* URL: /user */}
          {/* <Route path="search" element={<SearchPage />} /> */}     {/* URL: /user/search */}

        </Route>


        {/* ======================================= */}
        {/* 3. Fallback (จัดการกรณีพิมพ์ URL ผิด) */}
        {/* ======================================= */}
        {/* ใช้ Navigate ที่คุณ Import มา เพื่อเด้งกลับไปหน้า Home เมื่อพิมพ์ URL มั่ว */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;