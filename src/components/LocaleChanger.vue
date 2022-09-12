<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

function changeLocale(newLocale: string) {
  window.location.replace("/" + newLocale + route.path);
}
</script>

<template>
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
</template>

<style scoped></style>
