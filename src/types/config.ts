export type SiteConfig = {
    title: string;
    subTitle: string;

    cover: {
        enabled: boolean;
        title: string;
        subTitle: string;
    };

    favicon: string;
}

export type ProfileConfig = {
    avatar: string;
    name: string;
    description: string;
    introPage?: string;
    links: {
        name: string;
        url: string;
        icon: string;
        color: string;
    }[];
}