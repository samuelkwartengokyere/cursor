
export interface Contact {
    id: number;
    name: string;
    email: string;
    phone?: string | null;
    createdAt: string; // Dates are dates in DB but strings in JSON
}
