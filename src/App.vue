<script setup lang="ts">
import { RouterView } from "vue-router";
import { useTheme } from "vuetify";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

function changeLocale(newLocale: string) {
  window.location.replace("/" + newLocale + route.path);
}

const drawer = ref(false);

const theme = useTheme();

function getNextThemeName() {
  return theme.global.current.value.dark ? "light" : "dark";
}

function toggleTheme() {
  theme.global.name.value = getNextThemeName();
}
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="d-lg-none"
        variant="text"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Andrew Meservy</v-toolbar-title>
      <v-app-bar-title>
        <v-tabs class="d-none d-lg-block">
          <v-tab to="/">{{ $t("nav.home") }}</v-tab>
          <v-tab to="/software">SOFTWARE</v-tab>
          <v-tab to="/audio">AUDIO</v-tab>
          <v-tab to="/more">{{ $t("nav.more") }}</v-tab>
        </v-tabs>
      </v-app-bar-title>
      <v-btn class="d-none d-lg-block" variant="tonal" @click="toggleTheme">{{
        $t("nav." + getNextThemeName())
      }}</v-btn>
      <v-btn
        class="d-none d-lg-block"
        v-if="$i18n.locale == 'de'"
        variant="outlined"
        @click="changeLocale('de')"
        >Deutsch</v-btn
      >
      <v-btn class="d-none d-lg-block" v-else @click="changeLocale('de')"
        >Deutsch</v-btn
      >
      <v-btn
        class="d-none d-lg-block"
        v-if="$i18n.locale == 'en'"
        variant="outlined"
        @click="changeLocale('en')"
        >English</v-btn
      >
      <v-btn class="d-none d-lg-block" v-else @click="changeLocale('en')"
        >English</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="d-lg-none">
      <v-list>
        <v-list-item prepend-icon="mdi-home" to="/">{{
          $t("nav.home")
        }}</v-list-item>
        <v-list-item prepend-icon="mdi-code-greater-than" to="/software"
          >SOFTWARE</v-list-item
        >
        <v-list-item prepend-icon="mdi-music" to="/audio">AUDIO</v-list-item>
        <v-list-item prepend-icon="mdi-dots-horizontal-circle" to="/more">{{
          $t("nav.more")
        }}</v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item prepend-icon="mdi-brightness-6" @click="toggleTheme">{{
          $t("nav." + getNextThemeName())
        }}</v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item @click="changeLocale('de')">Deutsch</v-list-item>
        <v-list-item @click="changeLocale('en')">English</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="ml-12" fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <v-footer app>
    </v-footer> -->
  </v-app>
</template>

<style scoped></style>
