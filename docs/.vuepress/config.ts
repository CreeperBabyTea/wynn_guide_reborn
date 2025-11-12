import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'
import {fullSidebar} from "./fullSidebar";

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        sidebar: fullSidebar
    }),

    lang: "zh-CN",

    head: [
        ["meta", {charSet: "utf-8"}],
        ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
        ['link', {rel: 'icon', href: 'https://cdn.wynncraft.com/nextgen/themes/classic/assets/wynncraft_icon.svg'}]
    ]
})