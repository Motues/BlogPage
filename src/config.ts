import type {
    SiteConfig,
    ProfileConfig
} from "./types/config"

export const siteConfig: SiteConfig = {
    title: "Motues's Blog",
    subTitle: "记录生活",

    cover: {
        enabled: true,
        title: "欢迎来到小M的安乐居",
        subTitle: "记录生活点点滴滴"
    },

    favicon: "/favicon/favicon.ico" // Path of the favicon, relative to the /public directory
}

export const profileConfig: ProfileConfig = {
    avatar: "assets/Motues.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "Motues",
    description: "Like River!",
    indexPage: "https://motues.top",
    links: [
        // Visit https://icones.js.org/ for icon codes
        // You will need to install the corresponding icon set if it's not already included
        // `pnpm add @iconify-json/<icon-set-name>`
        // Then add icon to defineConfig.integrationsin.icon in astro.config.mjs
        // The colors a best to be clearly visible in both light and dark environments 
        {
          name: "Blog",
          url: "https://blog.motues.top",
          icon: "fa6-solid:paper-plane",
          color: "#72b6b3", // You can find more colors here: https://zhongguose.com/
        },
        {
            name: "Note",
            url: "https://note.motues.top",
            icon: "fa6-solid:book",
            color: "#b4a992",
        },
        {
            name: "Minecraft",
            url: "https://mc.motues.top",
            icon: "vscode-icons:file-type-minecraft",
            color: "",
        },
        {
            name: "GitHub",
            url: "https://github.com/Motues",
            icon: "fa6-brands:github",
            color: "#888",
        },
        {
            name: "Netease",
            url: "https://music.163.com/#/user/home?id=1601379853",
            icon: "simple-icons:neteasecloudmusic",
            color: "#ff2822",
        },
        // {
        //     name: "QQ",
        //     url: "https://res.abeim.cn/api/qq/?qq=2901987386",
        //     icon: "fa6-brands:qq",
        //     color: "#10a2d7ff",
        // },
        {
            name: "Mail",
            url: "mailto:me@motues.top",
            icon: "fa6-solid:envelope",
            color: "#43a4d1ff"
        },
    ]
}