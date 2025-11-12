import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/midgame.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/midgame.html\",\"title\":\"游戏中期(lv40~80)\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"游戏中期(lv40~80)\"},\"git\":{},\"filePathRelative\":\"tutorial/midgame.md\"}")
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
