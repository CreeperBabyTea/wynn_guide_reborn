import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/earlygame.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/earlygame.html\",\"title\":\"游戏初期(lv5~40)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"游戏初期(lv5~40)\"},\"git\":{},\"filePathRelative\":\"tutorial/earlygame.md\"}")
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
