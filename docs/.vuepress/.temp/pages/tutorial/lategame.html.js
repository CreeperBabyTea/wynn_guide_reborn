import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/lategame.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/lategame.html\",\"title\":\"游戏后期(lv80~100)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"游戏后期(lv80~100)\"},\"git\":{},\"filePathRelative\":\"tutorial/lategame.md\"}")
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
