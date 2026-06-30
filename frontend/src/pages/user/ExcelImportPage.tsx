import React, { useState, useRef } from "react";
import * as XLSX from "xlsx";
import { APILINK } from "../../api/LINKAPI";

import { RiUploadCloud2Fill } from "react-icons/ri";

const changeToThaiDate = (dateStr: any) => {
  if (!dateStr) return new Date();
  if (typeof dateStr === "number") {
    const excelEpoch = new Date(1899, 11, 30); // ปรับเป็นปี 1899 ตามมาตรฐาน Excel
    return new Date(excelEpoch.getTime() + dateStr * 86400000);
  }
  const months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const parts = dateStr.toString().trim().split(/\s+/);
  if (parts.length >= 3) {
    const day = parseInt(parts[0]);
    const monthIdx = months.indexOf(parts[1]);
    const year = parseInt(parts[2]) - 543;
    if (monthIdx !== -1 && !isNaN(day) && !isNaN(year)) {
      return new Date(year, monthIdx, day);
    }
  }
  return new Date(dateStr);
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sized = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sized[i];
};

const getFileExtension = (fileName: string) => {
  return fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);
};

const ExcelImportPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploaderName, setUploaderName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setMessage({ text: "", type: "" });
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];

      if (
        droppedFile.name.endsWith(".xlsx") ||
        droppedFile.name.endsWith(".xls") ||
        droppedFile.name.endsWith(".csv")
      ) {
        setFile(droppedFile);
        setMessage({ text: "", type: "" });
      } else {
        setMessage({
          text: "กรุณาอัปโหลดเฉพาะไฟล์ .xlsx หรือ .csv เท่านั้น",
          type: "error",
        });
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      setMessage({ text: "กรุณา Upload File ก่อนกดอัพโหลด", type: "error" });
      return;
    }
    setLoading(true);
    setMessage({ text: "กำลังอัพโหลดข้อมูล....", type: "info" });

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = event.target?.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const rawFile = XLSX.utils.sheet_to_json<any>(sheet, { range: 4 });

        const validRows = rawFile.filter(
          (row) =>
            row["รายการ"] &&
            row["รายการ"] !== "รวม" &&
            !row["รายการ"].toString().includes("รวม")
        );

        const formatData = validRows.map((row) => ({
          title: row["รายการ"],
          department: row["หน่วยงาน"],
          estimatedPrice: row["ราคากลาง"],
          auctionMethod: row["วิธีประมูล"],
          auctionDate: changeToThaiDate(row["วันที่ประมูล"]), // เรียกใช้ฟังก์ชันแปลงวันที่ตรงนี้
          soldPrice: row["ราคาที่ประมูลได้"],
          winnerName: row["ผู้ชนะการประมูล"],
          responsiblePerson: row["ชื่อผู้รับผิดชอบ"],
        }));

        setMessage({ text: "กำลังบันทึกข้อมูล", type: "info" });

        const response = await fetch(`${APILINK}/api/sale-records/import`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ recordData: formatData }), // Backend รับเป็น records
        });

        if (response.ok) {
          await response.json();
          setMessage({
            text: "อัพโหลดไฟล์สำเร็จ",
            type: "success",
          });

          setFile(null);
          setUploaderName("");
          if (fileInputRef.current) fileInputRef.current.value = "";
        } else {
          setMessage({
            text: "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
            type: "error",
          });
        }
      } catch (e) {
        console.error(`Error: ${e}`);
        setMessage({
          text: "ไฟล์ไม่ถูกต้อง หรือ ไฟล์อ่านไม่ได้",
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    };
    reader.readAsBinaryString(file);
  };

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      {/* import file */}
      <section className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-800">
          อัพโหลดไฟล์ตรงนี้
          <span className="ml-1 font-normal text-gray-400 text-xs">
            (.xlsx, .csv)
          </span>
        </label>

        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className={`border-2 border-dashed rounded-xl px-6 py-10 text-center cursor-pointer transition-colors
              ${file ? "border-green-400 bg-green-50" : "border-gray-300 bg-white hover:bg-gray-50"}`}
        >
          <div
            className={`text-3xl block mb-3 flex justify-center items-center ${file ? "text-green-500" : "text-blue-500"}`}
          >
            <RiUploadCloud2Fill />
          </div>
          <p className="text-sm font-medium text-gray-800 mb-1">
            {file ? `เลือกไฟล์: ${file.name} แล้ว` : "ลากไฟล์มาวางที่นี่"}
          </p>
          <p className="text-xs text-gray-400 mb-4">
            {file
              ? "คลิกหรือลากวางไฟล์ใหม่เพื่อเปลี่ยน"
              : "หรือคลิกเพื่อเลือกไฟล์"}
          </p>
          <div className="flex justify-center gap-2">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              .xlsx
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-800">
              .csv
            </span>
          </div>
          <input
            type="file"
            accept=".xlsx,.csv"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
        </div>

        <p className="text-xs text-gray-400">
          รองรับไฟล์ .xlsx และ .csv เท่านั้น
        </p>
      </section>

      <section className="py-10">
        <h1 className="flex flex-col gap-5 font-extrabold">รายละเอียดไฟล์</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 py-3 flex-2"
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex flex-col gap-2">
              <label>ชื่อไฟล์</label>
              <input
                type="text"
                disabled
                value={file ? file.name : ""}
                className="border-2 rounded px-2 py-1"
              />

              <label>นามสกุลไฟล์</label>
              <input
                type="text"
                disabled
                value={file ? `.${getFileExtension(file.name)}` : ""}
                className="border-2 rounded px-2 py-1"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>ขนาดไฟล์</label>
              <input
                type="text"
                disabled
                value={file ? formatFileSize(file.size) : ""}
                className="border-2 rounded px-2 py-1"
              />

              <label>ผู้อัพโหลด</label>
              <input
                type="text"
                value={uploaderName}
                onChange={(e) => setUploaderName(e.target.value)}
                className="border-2 rounded px-2 py-1"
              />
            </div>
          </div>

          {message.text && (
            <div
              className={`text-center py-2 mt-4 font-bold rounded ${
                message.type === "success"
                  ? "bg-green-100 text-green-700"
                  : message.type === "error"
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
              }`}
            >
              {message.text}
            </div>
          )}

          <section className="flex justify-center py-5 items-center">
            <button
              type="submit"
              disabled={loading}
              className="border-black border-2 px-4 py-2 hover:scale-110 focus:scale-90 transition-all disabled:opacity-50 disabled:hover:scale-100"
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          </section>
        </form>
      </section>
    </main>
  );
};

export default ExcelImportPage;