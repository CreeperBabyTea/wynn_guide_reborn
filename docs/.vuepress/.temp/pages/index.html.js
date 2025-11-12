import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Wynncraft中文攻略 重栽版\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"home\",\"title\":\"Wynncraft中文攻略 重栽版\",\"heroImage\":\"/assets/logo.svg\",\"heroFullScreen\":true,\"heroText\":\"Wynncraft中文攻略\",\"tagline\":\"By the players, for the players.\",\"actions\":[{\"text\":\"游戏指南\",\"link\":\"./tutorial/\",\"type\":\"primary\",\"icon\":\"lightbulb\"}]},\"git\":{\"updatedTime\":1762939701000,\"contributors\":[{\"name\":\"35578\",\"username\":\"35578\",\"email\":\"3557809672@qq.com\",\"commits\":1,\"url\":\"https://github.com/35578\"}],\"changelog\":[{\"hash\":\"a75cea7e3484d389c37050627aea24a819afdbfe\",\"time\":1762939701000,\"email\":\"3557809672@qq.com\",\"author\":\"35578\",\"message\":\"INITIAL COMMIT\"}]},\"filePathRelative\":\"index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
