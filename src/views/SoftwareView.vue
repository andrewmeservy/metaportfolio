<script setup lang="ts">
import TechnologiesList from "../components/TechnologiesList.vue";
</script>

<template>
  <main class="w-100">
    <div class="ma-10">
      <TechnologiesList></TechnologiesList>
    </div>
    <div class="d-lg-flex align-center">
      <div class="ma-4">
        <h1>{{ $t("software.work-history") }}</h1>
        <h3 class="mb-4">{{ $t("software.work-history-description") }}</h3>
      </div>
    </div>
  </main>
</template>

<style></style>
