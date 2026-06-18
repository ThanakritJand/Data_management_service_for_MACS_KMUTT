import { UserRole } from "./Enum"
export interface UserLogin {
    email: string;
    password: string;
    role: UserRole;
}

export interface UserProfile {
    id: string;
    email: string;
    role:  UserRole;
    name?: string;
}