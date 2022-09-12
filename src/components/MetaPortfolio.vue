<script setup lang="ts"></script>

<template>
  <div class="greetings">
    <h1 class="green">{{ $t("home.welcome") }}</h1>
    <h3>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="25"
        height="25"
      />
      {{ $t("home.project") }}
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
