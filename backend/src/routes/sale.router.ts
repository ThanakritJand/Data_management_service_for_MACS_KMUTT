import { Router } from "express";
import { getSaleRecords , importExcelRecord , createSaleRecord } from "../controllers/sale.controller";

const router = Router()

router.get('/' , getSaleRecords)
router.post('/', createSaleRecord);        
router.post('/import' , importExcelRecord)

export default router