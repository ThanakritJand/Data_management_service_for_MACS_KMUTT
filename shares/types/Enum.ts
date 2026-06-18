export enum UserRole {
    ADMIN = 'ADMIN' ,
    EDITOR = 'EDITOR' ,
    USER = 'USER'
}

export enum ApproveStatus {
    PENDING = 'PENDING' ,
    APPROVE = 'APPROVING' ,
    REJECT = 'REJECT'
}

export enum HistoryStatus {
    CREATE = 'CREATE' ,
    UPDATE = 'UPDATE' ,
    DELETE = 'DELETE' ,
    APPROVE = 'APPROVE' ,
    REJECT = 'REJECT'
}

export enum EntityType {
    EQUIPMENT = 'EQUIPMENT' ,
    REQUSET = 'REEQUEST' ,
    USER = 'USER'
}

export enum AuctionMethod {
    PUBLIC_VERBAL = 'ขายทอดตลาดโดยวิธีประมูลด้วยวาจา',       
    SPECIFIC = 'ขายโดยวิธีเฉพาะเจาะจง', 
    E_BIDDING = 'ประกวดราคาอิเล็กทรอนิกส์',  
    OTHER = 'วิธีอื่นๆ', 
}

export enum EquipmentStatus {
    IN_USE = 'ใช้งานอยู่',
    BROKEN = 'ชำรุด',            
    MAINTENANCE = 'ส่งซ่อม',   
    DISPOSED = 'จำหน่ายออก/ขายแล้ว'
}

