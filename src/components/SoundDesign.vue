<script setup lang="ts"></script>

<template>
  <div>
    <div class="d-lg-flex justify-center align-center">
      <div class="ma-4">
        <h1>{{ $t("audio.sound-design") }}</h1>
        <h3 class="mb-4">{{ $t("audio.sound-design-description") }}</h3>
        <h3>{{ $t("audio.sound-design-setup") }}</h3>
      </div>

      <div class="ma-4 d-flex justify-center">
        <img
          width="300"
          src="https://d238jsauu84mgr.cloudfront.net/audio-modular.jpg"
        />
      </div>
      <div class="ma-4 d-flex justify-center">
        <img
          width="300"
          src="https://d238jsauu84mgr.cloudfront.net/audio-schneiders.jpg"
        />
      </div>
    </div>
    <v-divider></v-divider>
    <div class="d-lg-flex justify-center align-center">
      <div class="ma-4 d-flex justify-center">
        <img
          width="300"
          src="https://d238jsauu84mgr.cloudfront.net/audio-funktion.jpg"
        />
      </div>
      <div class="ma-4 d-flex justify-center">
        <img
          width="300"
          src="https://d238jsauu84mgr.cloudfront.net/audio-perform.webp"
        />
      </div>
      <div class="ma-4 d-flex justify-center">
        <img
          width="300"
          src="https://d238jsauu84mgr.cloudfront.net/audio-intro.jpg"
        />
      </div>

      <div class="ma-4">
        <h1>{{ $t("audio.live-performance") }}</h1>
        <h3 class="mb-4">{{ $t("audio.live-sound-description") }}</h3>
        <h3 class="mb-4">{{ $t("audio.live-sound-description2") }}</h3>
        <h3 class="mb-4">{{ $t("audio.performance-description") }}</h3>
        <h3>{{ $t("audio.philosophy-in-sound") }}</h3>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
