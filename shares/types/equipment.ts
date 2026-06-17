import { FileData } from "./fileManagement";

export interface EquipmentItem {
    id: number;
    // require
    name: string;
    type: string;
    catagory: string;
    unit: string

    //  Optional
    brand?: string;
    model?: string;
    dedcription?: string;
    reasonForUse?: string;
    unitPrice?: number;

    // docs
    referenceDocsId?: string
    attacheFile: FileData;

    createAt: Date
    updateAt: Date
}