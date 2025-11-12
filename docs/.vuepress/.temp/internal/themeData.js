export const themeData = JSON.parse("{\"sidebar\":[{\"text\":\"新手指南\",\"collapsible\":true,\"link\":\"/tutorial/\",\"children\":[\"/tutorial/quest\",\"/tutorial/startgame\",\"/tutorial/earlygame\",\"/tutorial/midgame\",\"/tutorial/lategame\",\"/tutorial/endgame\"]},{\"text\":\"基础内容\",\"collapsible\":true,\"children\":[\"/basic/class\",\"/basic/command\",\"/basic/identification\",\"/basic/mmm\",\"/basic/lore\"]},{\"text\":\"进阶内容\",\"collapsible\":true,\"children\":[\"/advanced/mythic\",\"/advanced/build\",\"/advanced/tome_and_aspect\",\"/advanced/guild\",{\"text\":\"Lootrun\",\"collapsible\":true,\"children\":[\"/advanced/lr/basic\",\"/advanced/lr/strategy\"]},{\"text\":\"Raid\",\"collapsible\":true,\"link\":\"/advanced/raid/\",\"children\":[\"/advanced/raid/notg\",\"/advanced/raid/nol\",\"/advanced/raid/tcc\",\"/advanced/raid/tna\"]}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
