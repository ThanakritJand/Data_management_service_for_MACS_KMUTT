import { AuctionMethod } from './Enum';
export interface EquipmentSaleRecord {
    id: string
    title: string
    department: string
    estimatedPrice: number
    auctionMethod: AuctionMethod | string
    auctionDate: Date
    soldPrice: number
    winnerName: string
    responsiblePersonId: string

    equipmentIds: string[];        
  
    createdAt: Date;
    updatedAt: Date;
}