import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/startgame.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/startgame.html\",\"title\":\"初识Wynn\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"初识Wynn\"},\"git\":{},\"filePathRelative\":\"tutorial/startgame.md\"}")
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
