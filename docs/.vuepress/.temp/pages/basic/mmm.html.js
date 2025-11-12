import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/basic/mmm.html.vue"
const data = JSON.parse("{\"path\":\"/basic/mmm.html\",\"title\":\"赚钱方法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"赚钱方法\"},\"git\":{},\"filePathRelative\":\"basic/mmm.md\"}")
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
