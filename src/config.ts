import type {
    SiteConfig,
    ProfileConfig,
    LicenseConfig
} from "./types/config"

import type { FriendLink } from "./types/friend"

export const siteConfig: SiteConfig = {
    title: "Motues's Blog",
    subTitle: "记录生活",

    cover: {
        enabled: true,
        title: "欢迎来到小M的安乐居",
        subTitle: "记录生活点点滴滴"
    },

    favicon: "/favicon/favicon.ico", // Path of the favicon, relative to the /public directory

    pageSize: 6, // Number of posts per page
    toc: {
        enabled: true,
        depth: 3 // Max depth of the table of contents, between 1 and 4
    }

  }

export const profileConfig: ProfileConfig = {
    avatar: "assets/Motues.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    name: "Motues",
    description: "Like River!",
    indexPage: "https://motues.top",
}

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const friendLinkConfig: FriendLink[] = [
  {
    name: 'Han',
    avatar: 'https://avatars.githubusercontent.com/u/226641976',
    url: 'https://window-han.netlify.app/',
    description: 'window-han'
  },
  {
    name: 'TZMydl',
    avatar: 'https://avatars.githubusercontent.com/u/192936468',
    url: 'https://tzmydl.top/',
    description: 'Embrace failure, Enjoy life, Take everything as grace'
  },
  {
    name: 'MicDZ',
    avatar: 'https://avatars.githubusercontent.com/u/34596177',
    url: 'https://micdz.cn/',
    description: ''
  },
  {
    name: 'Q-mian',
    avatar: 'https://avatars.githubusercontent.com/q-mian',
    url: 'https://qmian.online/',
    description: ''
  },
  {
    name: 'Moyuin',
    avatar: 'https://avatars.githubusercontent.com/u/174886737?v=4',
    url: 'https://moyuin.top',
    description: 'Floating Or Hovering.'
  },
  {
    name: '李慕然的一天',
    avatar: 'https://limuran.top/favicon.ico',
    url: 'https://limuran.top/',
    description: '衣带渐宽终不悔，为伊消得人憔悴'
  },
  {
    name: 'PK',
    avatar: 'https://foruda.gitee.com/avatar/1735578534702305405/15325054_rustlove_1735578534.png!avatar100',
    url: 'https://rustlove.cn',
    description: 'we need a real revolution for ourselves.'
  }
  // Add more friend links here
]