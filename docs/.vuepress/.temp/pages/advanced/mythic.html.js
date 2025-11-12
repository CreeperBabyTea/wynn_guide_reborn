import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/advanced/mythic.html.vue"
const data = JSON.parse("{\"path\":\"/advanced/mythic.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"advanced/mythic.md\"}")
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
