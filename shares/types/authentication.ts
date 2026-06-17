import { UserRole } from "./Enum"
export interface UserLogin {
    email: string;
    password: string;
    role: UserRole;
}

export interface UserProfile {
    id: number;
    email: string;
    role:  UserRole;
    name?: string;
}