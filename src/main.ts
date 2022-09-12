import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import i18n from "./i18n";

import "vuetify/styles"; // Global CSS has to be imported
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "dark",
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);

app.use(i18n);
app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#app");
