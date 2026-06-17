import { EntityType, HistoryStatus } from "./Enum"

export interface ExcelImportHistory {
    id: number
    importBy: string
    fileName: string
    totalRows: number
    successfulRows: number
    failedRows: number
    importDate: Date
}

export interface OperationHistory {
    id: number
    userId: number
    action: HistoryStatus
    entityType: EntityType
    entityId: number
    description: string
    timeStamp: Date
}