export interface UserProfile {
    id: number;
    email: string;
    role: 'USER' | 'ADMIN';
    name: string | null;
}