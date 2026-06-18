import { ApproveStatus } from "./Enum"

export interface EquipmentRequest {
    id: string
    userId: string
    equipmentId: string
    reasonForUse: string
    quantity: number
    status: ApproveStatus
    requestAt: Date
    approveAt?: Date
    approveBy?: string
}