import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/endgame.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/endgame.html\",\"title\":\"游戏\\\"末期\\\"(lv100+)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"游戏\\\"末期\\\"(lv100+)\"},\"git\":{},\"filePathRelative\":\"tutorial/endgame.md\"}")
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
