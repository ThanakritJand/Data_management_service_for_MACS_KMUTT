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