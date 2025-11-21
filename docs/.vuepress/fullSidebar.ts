import type { SidebarOptions } from "@vuepress/theme-default"

export const fullSidebar: SidebarOptions = [
    {
        text: "新手指南",
        collapsible: true,
        link: "/tutorial/",
        children: [
            "/tutorial/quest_to_do",
            "/tutorial/startgame",
            "/tutorial/earlygame",
            "/tutorial/midgame",
            "/tutorial/lategame",
            "/tutorial/endgame",
        ]
    },
    {
        text: "基础内容",
        collapsible: true,
        children: [
            "/basic/class",
            "/basic/command",
            "/basic/identification",
            "/basic/mmm",
            "/basic/lore"
        ]
    },
    {
        text: "进阶内容",
        collapsible: true,
        children: [
            "/advanced/mythic",
            "/advanced/build",
            "/advanced/tome_and_aspect",
            "/advanced/guild",
            {
                text: "Lootrun",
                collapsible: true,
                children: [
                    "/advanced/lr/basic",
                    "/advanced/lr/strategy",
                ]
            },
            {
                text: "Raid",
                collapsible: true,
                link: "/advanced/raid/",
                children: [
                    "/advanced/raid/notg",
                    "/advanced/raid/nol",
                    "/advanced/raid/tcc",
                    "/advanced/raid/tna",
                ]
            }
        ]
    }
]