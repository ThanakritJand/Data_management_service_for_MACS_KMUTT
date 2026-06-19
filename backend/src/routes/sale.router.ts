import { Router } from "express";
import { getSaleRecords , importExcelRecord } from "../controllers/sale.controller";

const router = Router()

router.get('/' , getSaleRecords)
router.post('/import' , importExcelRecord)

export default router