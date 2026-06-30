import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom"; // 🌟 เพิ่ม import Link สำหรับทำระบบ Routing
import { APILINK } from "../../api/LINKAPI";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import * as XLSX from "xlsx";

const colorsForCharts = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

const translateMethod = (method: string) => {
  switch (method) {
    case "PUBLIC_VERBAL":
      return "ประมูลด้วยวาจา";
    case "SPECIFIC":
      return "เฉพาะเจาะจง";
    case "E_BIDDING":
      return "e-bidding";
    default:
      return "อื่นๆ";
  }
};

const getMonthYearValue = (dateStr: string | number) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
};

const getMonthYearLabel = (dateStr: string | number) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("th-TH", { month: "long", year: "numeric" });
};

const DashboardPage = () => {
  const [records, setRecord] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string>("ALL");

  const [chartData, setChartData] = useState({
    monthly: [] as any[],
    methods: [] as any[],
    departments: [] as any[],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${APILINK}/api/sale-records`);
        if (response.ok) {
          const result = await response.json();
          const data = result.data || [];
          setRecord(data);
        } else {
          setError("ไม่สามารถดึงข้อมูลได้");
        }
      } catch (e) {
        console.error(`Fetch error: ${e}`);
        setError("เกิดข้อผิดพลาดในการเชื่อมต่อ server");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const monthOptions = useMemo(() => {
    const optionMap = new Map();
    records.forEach((r) => {
      const val = getMonthYearValue(r.auctionDate);
      if (!optionMap.has(val)) {
        optionMap.set(val, getMonthYearLabel(r.auctionDate));
      }
    });
    // เรียงจากเดือนล่าสุด ไปหาเดือนเก่าสุด
    return Array.from(optionMap.entries()).sort((a, b) =>
      b[0].localeCompare(a[0]),
    );
  }, [records]);

  const filteredRecords = useMemo(() => {
    if (selectedMonth === "ALL") return records;
    return records.filter(
      (r) => getMonthYearValue(r.auctionDate) === selectedMonth,
    );
  }, [records, selectedMonth]);

  useEffect(() => {
    const processChartData = (data: any[]) => {
      const monthlyMap: Record<string, any> = {};
      const methodMap: Record<string, any> = {};
      const deptMap: Record<string, any> = {};

      data.forEach((item) => {
        const date = new Date(item.auctionDate);
        const monthYear = date.toLocaleDateString("th-TH", {
          month: "short",
          year: "2-digit",
        });

        if (!monthlyMap[monthYear]) {
          monthlyMap[monthYear] = {
            name: monthYear,
            ราคากลาง: 0,
            ราคาที่ขายได้: 0,
          };
        }
        monthlyMap[monthYear].ราคากลาง += Number(item.estimatedPrice || 0);
        monthlyMap[monthYear].ราคาที่ขายได้ += Number(item.soldPrice || 0);

        const method = translateMethod(item.auctionMethod);
        if (!methodMap[method]) {
          methodMap[method] = { name: method, value: 0 };
        }
        methodMap[method].value += 1;

        const dept = item.department || "ไม่ระบุ";
        if (!deptMap[dept]) {
          deptMap[dept] = { name: dept, ยอดขายรวม: 0 };
        }
        deptMap[dept].ยอดขายรวม += Number(item.soldPrice || 0);
      });

      const sortItem = Object.values(deptMap)
        .sort((a, b) => b.ยอดขายรวม - a.ยอดขายรวม)
        .slice(0, 5);

      setChartData({
        monthly: Object.values(monthlyMap),
        methods: Object.values(methodMap),
        departments: sortItem,
      });
    };

    processChartData(filteredRecords);
  }, [filteredRecords]);

  const totalRecord = filteredRecords.length;
  const totalEstimatedPrice = filteredRecords.reduce(
    (sum, record) => sum + Number(record.estimatedPrice || 0),
    0,
  );
  const totalSoldPrice = filteredRecords.reduce(
    (sum, record) => sum + Number(record.soldPrice || 0),
    0,
  );

  const handleExportFile = () => {
    if (filteredRecords.length === 0) {
      alert("ไม่มีข้อมูล");
      return;
    }

    const workBook = XLSX.utils.book_new();

    // 1. สร้าง Object เพื่อจัดกลุ่มข้อมูลตามเดือน
    const recordsByMonth: Record<string, any[]> = {};

    filteredRecords.forEach((row) => {
      // ดึงชื่อเดือนมาเป็นชื่อ Sheet (เช่น "ตุลาคม 2567")
      const sheetName = getMonthYearLabel(row.auctionDate);

      // ถ้ายังไม่มีเดือนนี้ใน Object ให้สร้าง Array ว่างเตรียมไว้
      if (!recordsByMonth[sheetName]) {
        recordsByMonth[sheetName] = [];
      }

      // จัดฟอร์แมตข้อมูลและ push ใส่ใน Array ของเดือนนั้นๆ
      recordsByMonth[sheetName].push({
        ลำดับ: recordsByMonth[sheetName].length + 1,
        รายการ: row.title,
        หน่วยงาน: row.department,
        ราคากลาง: Number(row.estimatedPrice),
        วิธีประมูล: translateMethod(row.auctionMethod),
        ราคาที่ประมูลได้: Number(row.soldPrice),
        วันที่ประมูล: new Date(row.auctionDate).toLocaleDateString("th-TH", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        ผู้ชนะการประมูล: row.winnerName,
        ชื่อผู้รับผิดชอบ: row.responsiblePerson,
      });
    });

    // 2. วนลูปสร้าง Sheet ตามกลุ่มเดือนที่มีข้อมูล
    Object.keys(recordsByMonth).forEach((sheetName) => {
      const workSheet = XLSX.utils.json_to_sheet(recordsByMonth[sheetName]);

      // ตั้งชื่อ Sheet (Excel จำจัดชื่อ Sheet ไม่เกิน 31 ตัวอักษร)
      const validSheetName = sheetName.substring(0, 31);

      // นำ Sheet ใส่เข้าไปใน Workbook
      XLSX.utils.book_append_sheet(workBook, workSheet, validSheetName);
    });

    // 3. กำหนดชื่อไฟล์หลัก
    let fileName = "รายงานการจำหน่าย_ทั้งหมด.xlsx";

    if (selectedMonth !== "ALL") {
      const monthLabel =
        monthOptions.find((m) => m[0] === selectedMonth)?.[1] || "";
      fileName = `รายงานการจำหน่าย_${monthLabel.replace(/\s+/g, "_")}.xlsx`;
    }

    // 4. สั่งดาวน์โหลด
    XLSX.writeFile(workBook, fileName);
  };

  return (
    <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-slate-50/50 min-h-screen">
      {/* 🌟 Header Section & Filter */}
      <section className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            แดชบอร์ดสรุปผล (Dashboard)
          </h1>
          <p className="text-slate-500 mt-1.5 text-sm md:text-base">
            ภาพรวมข้อมูลการจำหน่ายครุภัณฑ์และสถิติที่น่าสนใจประจำปี
          </p>
        </div>

        <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 transition-shadow hover:shadow-md">
          <label className="text-sm font-semibold text-slate-700 whitespace-nowrap pl-2">
            เลือกช่วงเวลา:
          </label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border-none bg-slate-100/80 rounded-lg px-4 py-2 text-slate-700 text-sm font-medium outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer min-w-[200px] transition-all"
          >
            <option value="ALL">ดูทั้งหมด (ทุกเดือน)</option>
            {monthOptions.map(([val, label]) => (
              <option key={val} value={val}>
                เดือน {label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* 🌟 Action Links Section (เพิ่มตามที่ร้องขอ) */}
      <section className="flex flex-wrap gap-3 mb-8">
        <Link
          to="/user/addItem"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm shadow-blue-200 transition-all text-sm flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          ไปเพิ่มข้อมูลเพิ่ม
        </Link>

        <Link
          to="/user/import-center"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm shadow-emerald-200 transition-all text-sm flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          ไป import File
        </Link>

        <button
          onClick={handleExportFile}
          className="bg-slate-800 hover:bg-slate-900 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm shadow-slate-300 transition-all text-sm flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Export ข้อมูล
        </button>
      </section>

      {/* 🌟 Loading / Error State */}
      {loading ? (
        <div className="flex flex-col justify-center items-center h-64 space-y-4">
          <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="text-slate-500 font-medium">
            กำลังประมวลผลข้อมูล...
          </div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-5 rounded-r-xl font-medium text-center shadow-sm">
          {error}
        </div>
      ) : (
        <div className="space-y-6">
          {/* 🌟 Summary Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
              <p className="text-slate-500 text-sm font-medium mb-2">
                รายการจำหน่ายทั้งหมด
              </p>
              <h3 className="text-3xl font-extrabold text-slate-800">
                {totalRecord}{" "}
                <span className="text-base font-normal text-slate-400">
                  รายการ
                </span>
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              <p className="text-slate-500 text-sm font-medium mb-2">
                มูลค่าราคากลางรวม
              </p>
              <h3 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                ฿ {totalEstimatedPrice.toLocaleString()}
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <p className="text-slate-500 text-sm font-medium mb-2">
                มูลค่าราคาที่ประมูลได้รวม
              </p>
              <h3 className="text-3xl font-extrabold text-emerald-600 tracking-tight">
                ฿ {totalSoldPrice.toLocaleString()}
              </h3>
            </div>
          </section>

          {/* 🌟 Charts Layout */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* กราฟเส้น (เต็มแถวแรก) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2">
              <h3 className="font-bold text-slate-800 mb-6 text-lg">
                แนวโน้มเปรียบเทียบราคากลาง vs ราคาที่ประมูลได้ (รายเดือน)
              </h3>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={chartData.monthly}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b" }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b" }}
                      tickFormatter={(val) => `฿${(val / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      formatter={(value) => [
                        `฿ ${Number(value).toLocaleString()}`,
                        undefined,
                      ]}
                    />
                    <Legend
                      iconType="circle"
                      wrapperStyle={{ paddingTop: "20px" }}
                    />
                    <Line
                      type="monotone"
                      name="ราคากลาง"
                      dataKey="ราคากลาง"
                      stroke="#94a3b8"
                      strokeWidth={3}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                    <Line
                      type="monotone"
                      name="ราคาที่ประมูลได้"
                      dataKey="ราคาที่ขายได้"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* กราฟโดนัท (ครึ่งจอซ้าย) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <h3 className="font-bold text-slate-800 mb-2 text-lg">
                สัดส่วนวิธีการจำหน่าย
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                แบ่งตามจำนวนรายการที่เกิดขึ้น
              </p>
              <div className="flex-1 min-h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData.methods}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      labelLine={false}
                      label={({ name, percent= 0 }) =>
                        percent > 0.05
                          ? `${name} ${(percent * 100).toFixed(0)}%`
                          : ""
                      }
                    >
                      {chartData.methods.map((index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colorsForCharts[index % colorsForCharts.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      formatter={(value) => [
                        `${Number(value).toLocaleString()} รายการ`,
                        "จำนวน",
                      ]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* กราฟแท่ง (ครึ่งจอขวา) */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col">
              <h3 className="font-bold text-slate-800 mb-2 text-lg">
                Top 5 หน่วยงานยอดเยี่ยม
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                หน่วยงานที่สร้างมูลค่าได้สูงสุด
              </p>
              <div className="flex-1 min-h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData.departments}
                    layout="vertical"
                    margin={{ top: 0, right: 30, left: 30, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={true}
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#475569", fontSize: 13 }}
                      width={120}
                    />
                    <Tooltip
                      cursor={{ fill: "#f8fafc" }}
                      contentStyle={{
                        borderRadius: "12px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                      formatter={(value) => [
                        `฿ ${Number(value).toLocaleString()}`,
                        "ยอดขายรวม",
                      ]}
                    />
                    <Bar
                      dataKey="ยอดขายรวม"
                      fill="#3b82f6"
                      radius={[0, 6, 6, 0]}
                      barSize={24}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* 🌟 Table Section */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 bg-white flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-800 text-lg">
                  รายการจำหน่ายล่าสุด
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {selectedMonth !== "ALL"
                    ? `ข้อมูลประจำเดือน ${monthOptions.find((m) => m[0] === selectedMonth)?.[1]}`
                    : "ข้อมูลทั้งหมดในระบบ"}
                </p>
              </div>
              <button className="text-sm text-blue-600 font-semibold bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">
                ดูทั้งหมด
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left whitespace-nowrap">
                <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold text-center">
                      ลำดับ
                    </th>
                    <th className="px-6 py-4 font-semibold">รายการ</th>
                    <th className="px-6 py-4 font-semibold">หน่วยงาน</th>
                    <th className="px-6 py-4 font-semibold text-right">
                      ราคากลาง
                    </th>
                    <th className="px-6 py-4 font-semibold text-center">
                      วิธีการประมูล
                    </th>
                    <th className="px-6 py-4 font-semibold text-right">
                      ราคาที่ประมูลได้
                    </th>
                    <th className="px-6 py-4 font-semibold text-center">
                      วันที่ประมูล
                    </th>
                    <th className="px-6 py-4 font-semibold">ผู้ชนะการประมูล</th>
                    <th className="px-6 py-4 font-semibold">ผู้รับผิดชอบ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredRecords.length > 0 ? (
                    filteredRecords.slice(0, 5).map((row, index) => (
                      <tr
                        key={index}
                        className="hover:bg-slate-50/80 transition-colors group"
                      >
                        <td className="px-6 py-4 text-center text-slate-400">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 font-medium text-slate-700">
                          {row.title}
                        </td>
                        <td className="px-6 py-4 text-slate-500">
                          {row.department}
                        </td>
                        <td className="px-6 py-4 text-right text-slate-500">
                          {Number(row.estimatedPrice).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="bg-blue-50 text-blue-600 border border-blue-100 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                            {translateMethod(row.auctionMethod)}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right text-emerald-600 font-bold group-hover:text-emerald-500">
                          {Number(row.soldPrice).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 text-center text-slate-500">
                          {new Date(row.auctionDate).toLocaleDateString(
                            "th-TH",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            },
                          )}
                        </td>
                        <td className="px-6 py-4 text-slate-600">
                          {row.winnerName}
                        </td>
                        <td className="px-6 py-4 text-slate-600">
                          {row.responsiblePerson}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={9}
                        className="px-6 py-12 text-center text-slate-400"
                      >
                        <div className="flex flex-col items-center justify-center">
                          <svg
                            className="w-12 h-12 mb-3 text-slate-200"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                            />
                          </svg>
                          <p>ไม่พบข้อมูลในเดือนที่เลือก</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      )}
    </main>
  );
};

export default DashboardPage;
