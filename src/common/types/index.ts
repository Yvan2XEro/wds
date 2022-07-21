export type Service = {
    id: number;
    icon: any;
    title: string;
    text: string;
};

export type WorkCategory = {
    id: number;
    label: string;
};

export type Work = {
    id?: number;
    image: string;
    label: string;
    link: string;
    category: WorkCategory;
}