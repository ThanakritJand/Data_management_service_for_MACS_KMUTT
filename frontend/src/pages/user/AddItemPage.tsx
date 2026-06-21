const AddItemPage = () => {
  return (
    <main className="py-5">
      <section className="flex flex-col gap-2 items-center">
        <h1 className="text-3xl font-extrabold font-sans">การกรอกวันประมูล</h1>
        <ul>
          <li className="list-decimal">
            ขายวิธีเฉพาะเจาะจงให้ยึดวันที่ในใบเสร็จ
          </li>
          <li className="list-decimal">
            ขายทอดตลาดให้ยึดวันที่ขายทอดตลาดเป็นหลัก
          </li>
          <li className="list-decimal">
            ถ้ายังเลิกขายทอดตลาด ให้ระบุเป็น{" "}
            <span className="font-black">ขายวิธีเฉพาะเจาะจง</span>
          </li>
          <li className="list-decimal">ยื่นซองให้ยึดวันที่ยื่นซอง</li>
          <li className="list-decimal">บริจาคให้ยึดวันที่อาจารย์เซ็น</li>
        </ul>
      </section>

      <form action="" className="flex flex-col gap-4 py-3 flex-2">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {/* Left column - first half */}
          <div className="flex flex-col gap-2">
            <label>รายการ</label>
            <input
              type="text"
              placeholder="ตัวอย่าง:จำหน่ายครุภัณฑ์ จำนวน 72 ชิ้น"
              className="border-2 rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>หน่วยงาน</label>
            <input
              type="text"
              placeholder="ตัวอย่าง:สำนักงานกิจการนักศึกษา"
              className="border-2 rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>ราคากลาง</label>
            <input
              type="text"
              placeholder="ตัวอย่าง: 11,000"
              className="border-2 rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>วิธีการประมูล</label>
            <select className="border-2 rounded px-2 py-1">
              <option value="">ขายทอดตลาดโดยวิธีประมูลด้วยวาจา</option>
              <option value="">ขายวิธีเฉพาะเจาะจง</option>
            </select>
          </div>

          {/* Right column - second half */}
          <div className="flex flex-col gap-2">
            <label>วันที่ประมูล</label>
            <input type="date" className="border-2 rounded px-2 py-1" />
          </div>

          <div className="flex flex-col gap-2">
            <label>ราคาที่ประมูลได้</label>
            <input
              type="text"
              placeholder="ตัวอย่าง:32,800.00"
              className="border-2 rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>ผู้ชนะการประมูล</label>
            <input
              type="text"
              placeholder="ตัวอย่าง:นายสมจิต สมใจ"
              className="border-2 rounded px-2 py-1"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label>ชื่อผู้รับผิดชอบ</label>
            <input
              type="text"
              placeholder="ตัวอย่าง:สมปอง"
              className="border-2 rounded px-2 py-1"
            />
          </div>
        </div>
      </form>
    
    <section className="flex justify-center py-5 items-center">
      <button className="border-black border-2 px-4 py-2 hover:scale-110 focus:scale-90 transition-all">เพิ่มข้อมูล</button>
    </section>
    </main>
  );
};

export default AddItemPage;
