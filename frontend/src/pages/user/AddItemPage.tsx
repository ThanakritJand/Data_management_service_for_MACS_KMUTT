import React, { useState } from "react";
import { APILINK } from "../../api/LINKAPI";

const AddItemPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    estimatedPrice: "",
    auctionMethod: "",
    auctionDate: "",
    soldPrice: "",
    winnerName: "",       
    responsiblePerson: "",
    otherMethod: "",      
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handingChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "กำลังโหลดข้อมูล", type: "info" });
    try {
      const payLoad = {
        ...formData,
        estimatedPrice: Number(formData.estimatedPrice) || 0, // bug 5: verify with backend
        soldPrice: Number(formData.soldPrice) || 0,
      };
      const response = await fetch(`${APILINK}/api/sale-records`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payLoad),
      });
      if (response.ok) {
        setMessage({ text: "ข้อมูลสำเร็จแล้ว", type: "success" }); // bug 4 fix: "success"
        setFormData({
          title: "",
          department: "",
          estimatedPrice: "",
          auctionMethod: "",
          auctionDate: "",
          soldPrice: "",
          winnerName: "",
          responsiblePerson: "",
          otherMethod: "",
        });
      } else {
        const errorData = await response.json();
        setMessage({
          text: `บันทึกข้อมูลไม่สำเร็จ: ${errorData.error || "เกิดข้อผิดพลาด"}`,
          type: "error",
        });
      }
    } catch (e) {
      console.error(e);
      setMessage({ text: `เกิดข้อผิดพลาด: ${e}`, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="py-5">
      <section className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-extrabold font-sans">การกรอกวันประมูล</h1>
        <ul>
          <li className="list-decimal">ขายวิธีเฉพาะเจาะจงให้ยึดวันที่ในใบเสร็จ</li>
          <li className="list-decimal">ขายทอดตลาดให้ยึดวันที่ขายทอดตลาดเป็นหลัก</li>
          <li className="list-decimal">
            ถ้ายังเลิกขายทอดตลาด ให้ระบุเป็น{" "}
            <span className="font-black">ขายวิธีเฉพาะเจาะจง</span>
          </li>
          <li className="list-decimal">ยื่นซองให้ยึดวันที่ยื่นซอง</li>
          <li className="list-decimal">บริจาคให้ยึดวันที่อาจารย์เซ็น</li>
        </ul>
      </section>

      <form onSubmit={handSubmit} className="flex flex-col gap-4 py-3 flex-2">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">

          <div className="flex flex-col gap-2">
            <label>รายการ</label>
            <input
              type="text"
              name="title"                  
              placeholder="ตัวอย่าง:จำหน่ายครุภัณฑ์ จำนวน 72 ชิ้น"
              className="border-2 rounded px-2 py-1"
              value={formData.title}
              onChange={handingChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>หน่วยงาน</label>
            <input
              type="text"
              name="department"             
              placeholder="ตัวอย่าง:สำนักงานกิจการนักศึกษา"
              className="border-2 rounded px-2 py-1"
              value={formData.department}
              onChange={handingChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>ราคากลาง</label>
            <input
              type="text"
              name="estimatedPrice"          
              placeholder="ตัวอย่าง: 11,000"
              className="border-2 rounded px-2 py-1"
              value={formData.estimatedPrice}
              onChange={handingChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>วิธีการประมูล</label>
            <select
              name="auctionMethod"
              value={formData.auctionMethod}
              onChange={handingChange}
              className="border-2 rounded px-2 py-1"
              required
            >
              <option value="" disabled>เลือกวิธีการประมูล</option>
              <option value="PUBLIC_VERBAL">ขายทอดตลาดโดยวิธีประมูลด้วยวาจา</option>
              <option value="SPECIFIC">ขายวิธีเฉพาะเจาะจง</option>
              <option value="E_BIDDING">E_BIDDING</option>
              <option value="OTHER">ขายวิธีอื่นๆ</option>
            </select>
            {formData.auctionMethod === "OTHER" && (
              <div className="flex flex-col gap-2 mt-2">
                <label className="text-sm text-gray-600">โปรดระบุวิธีอื่นๆ</label>
                <input
                  type="text"
                  name="otherMethod"
                  value={formData.otherMethod}  
                  onChange={handingChange}
                  placeholder="ตัวอย่าง: บริจาค"
                  className="border-2 rounded px-2 py-1"
                  required
                />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label>วันที่ประมูล</label>
            <input
              type="date"
              name="auctionDate"
              value={formData.auctionDate}
              onChange={handingChange}
              className="border-2 rounded px-2 py-1"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>ราคาที่ประมูลได้</label>
            <input
              type="number"
              name="soldPrice"
              value={formData.soldPrice}
              onChange={handingChange}
              placeholder="ตัวอย่าง: 32800"
              className="border-2 rounded px-2 py-1"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>ผู้ชนะการประมูล</label>
            <input
              type="text"
              name="winnerName"             
              value={formData.winnerName}
              onChange={handingChange}
              placeholder="ตัวอย่าง:สมปอง"
              className="border-2 rounded px-2 py-1"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>ชื่อผู้รับผิดชอบ</label>
            <input
              type="text"
              name="responsiblePerson"        
              value={formData.responsiblePerson}
              onChange={handingChange}
              placeholder="ตัวอย่าง:สมปอง"
              className="border-2 rounded px-2 py-1"
              required
            />
          </div>

        </div>

        {message.text && (
          <div
            className={`text-center py-2 font-bold ${
              message.type === "success"
                ? "text-green-600"
                : message.type === "error"
                ? "text-red-600"
                : "text-blue-600"
            }`}
          >
            {message.text}
          </div>
        )}

        <section className="flex justify-center py-5 items-center">
          <button
            type="submit"
            disabled={loading}
            className="border-black border-2 px-4 py-2 hover:scale-110 focus:scale-90 transition-all"
          >
            {loading ? "กำลังบันทึก..." : "เพิ่มข้อมูล"}
          </button>
        </section>
      </form>
    </main>
  );
};

export default AddItemPage;