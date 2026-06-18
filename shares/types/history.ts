import { EntityType, HistoryStatus } from "./Enum"

export interface ExcelImportHistory {
    id: string
    importBy: string
    fileName: string
    totalRows: number
    successfulRows: number
    failedRows: number
    importDate: Date
}

export interface OperationHistory {
    id: string
    userId: string
    action: HistoryStatus
    entityType: EntityType
    entityId: string
    description: string
    timeStamp: Date
}