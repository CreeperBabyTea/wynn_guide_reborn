import { defineClientConfig } from "@vuepress/client";
import ClassArchetypes from "./components/ClassArchetypes.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("ClassArchetypes", ClassArchetypes)
    }
})