import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/endgame.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/endgame.html\",\"title\":\"游戏\\\"末期\\\"(lv100+)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"游戏\\\"末期\\\"(lv100+)\"},\"git\":{\"updatedTime\":1762939701000,\"contributors\":[{\"name\":\"35578\",\"username\":\"35578\",\"email\":\"3557809672@qq.com\",\"commits\":1,\"url\":\"https://github.com/35578\"}],\"changelog\":[{\"hash\":\"a75cea7e3484d389c37050627aea24a819afdbfe\",\"time\":1762939701000,\"email\":\"3557809672@qq.com\",\"author\":\"35578\",\"message\":\"INITIAL COMMIT\"}]},\"filePathRelative\":\"tutorial/endgame.md\"}")
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
