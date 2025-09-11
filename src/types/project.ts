export type Project = {
    id: string;
    title: string;
    description: string;
    stack: string[];
    tags?: string[];
    href?: string;
    repo?: string;
    cover?: string;
    year?: number;
};