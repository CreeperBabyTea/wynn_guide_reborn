import { defineClientConfig } from "@vuepress/client";
import ClassArchetypes from "./components/ClassArchetypes.vue";
import Weapon from "./components/Weapon.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("ClassArchetypes", ClassArchetypes)
        app.component("Weapon", Weapon)
    }
})