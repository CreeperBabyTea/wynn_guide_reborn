export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"zh-CN\",\"title\":\"\",\"description\":\"\",\"head\":[[\"meta\",{\"charSet\":\"utf-8\"}],[\"meta\",{\"name\":\"viewport\",\"content\":\"width=device-width, initial-scale=1\"}],[\"link\",{\"rel\":\"icon\",\"href\":\"/favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
