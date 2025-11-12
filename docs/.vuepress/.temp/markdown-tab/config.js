import { CodeTabs } from "E:/Development/projects/html/wynn_guide_reborn/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/Development/projects/html/wynn_guide_reborn/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/Development/projects/html/wynn_guide_reborn/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
