export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Wynncraft中文攻略 重栽版"} }],
  ["/advanced/build.html", { loader: () => import(/* webpackChunkName: "advanced_build.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/build.html.js"), meta: {"title":"配装教程"} }],
  ["/advanced/guild.html", { loader: () => import(/* webpackChunkName: "advanced_guild.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/guild.html.js"), meta: {"title":""} }],
  ["/advanced/mythic.html", { loader: () => import(/* webpackChunkName: "advanced_mythic.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/mythic.html.js"), meta: {"title":"公会系统"} }],
  ["/advanced/tome_and_aspect.html", { loader: () => import(/* webpackChunkName: "advanced_tome_and_aspect.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/tome_and_aspect.html.js"), meta: {"title":"Tome与Aspect"} }],
  ["/basic/class.html", { loader: () => import(/* webpackChunkName: "basic_class.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/basic/class.html.js"), meta: {"title":"职业与分支"} }],
  ["/basic/command.html", { loader: () => import(/* webpackChunkName: "basic_command.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/basic/command.html.js"), meta: {"title":"常用指令"} }],
  ["/basic/identification.html", { loader: () => import(/* webpackChunkName: "basic_identification.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/basic/identification.html.js"), meta: {"title":"词条与鉴定"} }],
  ["/basic/lore.html", { loader: () => import(/* webpackChunkName: "basic_lore.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/basic/lore.html.js"), meta: {"title":"游戏黑话"} }],
  ["/basic/mmm.html", { loader: () => import(/* webpackChunkName: "basic_mmm.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/basic/mmm.html.js"), meta: {"title":"赚钱方法"} }],
  ["/tutorial/earlygame.html", { loader: () => import(/* webpackChunkName: "tutorial_earlygame.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/earlygame.html.js"), meta: {"title":"游戏初期(lv5~40)"} }],
  ["/tutorial/endgame.html", { loader: () => import(/* webpackChunkName: "tutorial_endgame.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/endgame.html.js"), meta: {"title":"游戏\"末期\"(lv100+)"} }],
  ["/tutorial/", { loader: () => import(/* webpackChunkName: "tutorial_index.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/index.html.js"), meta: {"title":"开始游戏前"} }],
  ["/tutorial/lategame.html", { loader: () => import(/* webpackChunkName: "tutorial_lategame.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/lategame.html.js"), meta: {"title":"游戏后期(lv80~100)"} }],
  ["/tutorial/midgame.html", { loader: () => import(/* webpackChunkName: "tutorial_midgame.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/midgame.html.js"), meta: {"title":"游戏中期(lv40~80)"} }],
  ["/tutorial/quest.html", { loader: () => import(/* webpackChunkName: "tutorial_quest.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/quest.html.js"), meta: {"title":"必做任务"} }],
  ["/tutorial/startgame.html", { loader: () => import(/* webpackChunkName: "tutorial_startgame.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/startgame.html.js"), meta: {"title":"初识Wynn"} }],
  ["/advanced/lr/basic.html", { loader: () => import(/* webpackChunkName: "advanced_lr_basic.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/lr/basic.html.js"), meta: {"title":"lr基本知识"} }],
  ["/advanced/lr/strategy.html", { loader: () => import(/* webpackChunkName: "advanced_lr_strategy.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/lr/strategy.html.js"), meta: {"title":"lr策略"} }],
  ["/advanced/raid/", { loader: () => import(/* webpackChunkName: "advanced_raid_index.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/raid/index.html.js"), meta: {"title":"Raid"} }],
  ["/advanced/raid/nol.html", { loader: () => import(/* webpackChunkName: "advanced_raid_nol.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/raid/nol.html.js"), meta: {"title":"光之枢纽"} }],
  ["/advanced/raid/notg.html", { loader: () => import(/* webpackChunkName: "advanced_raid_notg.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/raid/notg.html.js"), meta: {"title":"异虫之穴"} }],
  ["/advanced/raid/tcc.html", { loader: () => import(/* webpackChunkName: "advanced_raid_tcc.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/raid/tcc.html.js"), meta: {"title":"峡谷巨像"} }],
  ["/advanced/raid/tna.html", { loader: () => import(/* webpackChunkName: "advanced_raid_tna.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/raid/tna.html.js"), meta: {"title":"无名异常"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
