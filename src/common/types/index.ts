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

export type User = {
    id?: number;
    name: string;
    avatar
    : string;
};

export type Testimonial = User & {
    text: string;
}

export type UserAbout = User & {
    bio: string;
    tags: string[];
    founder: boolean;
    socials: {
        twitter: string;
        github: string;
        linkedin: string;
    }
}

export type PostCategory = WorkCategory

export type Post = {
    id?: number;
    title: string;
    image: string;
    text: string;
    createdAt: Date;
    author: User;
    category: PostCategory
}