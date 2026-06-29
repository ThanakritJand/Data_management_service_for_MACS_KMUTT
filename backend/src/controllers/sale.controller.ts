import { Request , Response } from "express";
import * as saleRecordService from '../services/sale.service.js'

export const getSaleRecords = async(req: Request,  res:Response) => {
    try{
        const recordData = await saleRecordService.getAllSaleRecords()
        res.status(200).json({data: recordData})
    }catch (error){
        console.error(`error: ${error}`)
        res.status(500).json({error: 'ไม่สามารถรถดึงประวัติการขายได้'})
    }
}

export const createSaleRecord = async(req: Request , res: Response) => {
    try {
        const result = await saleRecordService.createSaleRecord(req.body)
        res.status(201).json({ message: "บันทึกข้อมูลสำเร็จ", data: result });
    }catch(e) {
        console.error('Error creating sale record:', e);
            res.status(500).json({ 
            error: "ไม่สามารถบันทึกข้อมูลได้",
            detail: String(e)   // ← เพิ่มบรรทัดนี้
        });;
    }
}

export const importExcelRecord = async(req: Request,  res:Response) => {
    try{
       const records = req.body.recordData

       if(!records || !Array.isArray(records)) {
        res.status(400).json({error: "รูปแบบข้อมูลไม่ถูกต้อง กรุณาส่งเป็น Array"})
        return
       }

       const result = await saleRecordService.importBulkSaleRecords(records)
       res.status(201).json({
        message: "นำเข้าข้อมูลจาก Excel สำเร็จ" ,
        totalImported: result.count,
       })
    }catch(error){
        console.error('Error importing excel records:', error)
        res.status(500).json({error: "ไม่สามารถนำเข้า excel ได้"})
    }
}