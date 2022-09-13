<script setup lang="ts"></script>

<template>
  <div class="greetings ma-10">
    <h1 class="green">{{ $t("home.welcome") }}</h1>
    <h3>
      <div>
        {{ $t("home.project") }}
        <a target="_blank" href="https://vitejs.dev/">Vite</a> +
        <a target="_blank" href="https://vuejs.org/">Vue 3</a>
        {{ $t("home.hosted") }}
        <a target="_blank" href="https://aws.amazon.com/ecs/">AWS ECS</a>.
        <pre></pre>
        {{ $t("home.source") }}
        <a
          target="_blank"
          href="https://github.com/andrewmeservy/metaportfolio"
          >{{ $t("home.here") }}</a
        >
      </div>

      <div class="mt-4">
        {{ $t("home.meta") }}
        <a
          target="_blank"
          class="font-italic"
          href="https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach"
          >{{ $t("home.book") }}</a
        >
        {{ $t("home.meta2") }}
      </div>
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
