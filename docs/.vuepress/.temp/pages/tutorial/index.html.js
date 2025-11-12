import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/tutorial/index.html.vue"
const data = JSON.parse("{\"path\":\"/tutorial/\",\"title\":\"开始游戏前\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"开始游戏前\"},\"git\":{},\"filePathRelative\":\"tutorial/index.md\"}")
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
