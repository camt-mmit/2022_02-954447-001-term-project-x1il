export type List<T> = {
    next: URL | null;
    previous: URL | null;
    results: T[];
};

export type SearchData = {
    search?: string;
    page?: string;
};

export type Specie = {
    id: number;
    name: string;
    native: string;
};