import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-bg">
        <h1 className="text-4xl font-bold text-theme-primary mb-4">ระบบ PAM MACS</h1>
        <p className="mb-8 text-text-muted">นี่คือหน้าแรก (Public Zone) ที่ใครก็เข้าถึงได้ครับ</p>
        
        {/* ปุ่มจำลองสำหรับกดเข้าไปดูโซน User */}
        <Link 
          to="/user/overview" 
          className="px-6 py-3 bg-theme-primary text-white rounded-md hover:bg-theme-hover transition-colors"
        >
          เข้าสู่ระบบ / ไปหน้า User Dashboard
        </Link>
    </div>
  )
}

export default Home