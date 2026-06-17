import { ApproveStatus } from "./Enum"

export interface EquipmentRequest {
    id: number
    userId: number
    equipmentId: number
    reasonForUse: number
    quantity: number
    status: ApproveStatus
    requestAt: Date
    approveAt?: Date
    approveBy?: string
}