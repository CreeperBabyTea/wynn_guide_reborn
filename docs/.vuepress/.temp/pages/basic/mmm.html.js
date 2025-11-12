import comp from "E:/Development/projects/html/wynn_guide_reborn/docs/.vuepress/.temp/pages/basic/mmm.html.vue"
const data = JSON.parse("{\"path\":\"/basic/mmm.html\",\"title\":\"赚钱方法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"赚钱方法\"},\"git\":{\"updatedTime\":1762939991000,\"contributors\":[{\"name\":\"35578\",\"username\":\"35578\",\"email\":\"3557809672@qq.com\",\"commits\":2,\"url\":\"https://github.com/35578\"}],\"changelog\":[{\"hash\":\"4571ea357394d0e53937ca97a54eacb4f767ce12\",\"time\":1762939991000,\"email\":\"3557809672@qq.com\",\"author\":\"35578\",\"message\":\"INITIAL COMMIT\"},{\"hash\":\"a75cea7e3484d389c37050627aea24a819afdbfe\",\"time\":1762939701000,\"email\":\"3557809672@qq.com\",\"author\":\"35578\",\"message\":\"INITIAL COMMIT\"}]},\"filePathRelative\":\"basic/mmm.md\"}")
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
