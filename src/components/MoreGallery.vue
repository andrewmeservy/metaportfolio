<script setup lang="ts">
import i18n from "../i18n";

const photos = [
  {
    isVideo: false,
    key: "climbing",
    description: i18n.global.t("more.gallery.climbing"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-climbing.jpg",
  },
  {
    isVideo: false,
    key: "reading",
    description: i18n.global.t("more.gallery.reading"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-reading.gif",
  },
  {
    isVideo: false,
    key: "vr",
    description: i18n.global.t("more.gallery.vr"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-vr.png",
  },

  {
    isVideo: true,
    key: "oscilloscopeart",
    description: i18n.global.t("more.gallery.oscilloscopeart"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-oscilloscopeart.mp4",
    videoType: "video/mp4",
  },
  {
    isVideo: false,
    key: "photography",
    description: i18n.global.t("more.gallery.photography"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-photography.jpg",
  },
  {
    isVideo: false,
    key: "languages",
    description: i18n.global.t("more.gallery.languages"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-languages.jpg",
  },

  {
    isVideo: true,
    key: "shaders",
    description: i18n.global.t("more.gallery.shaders"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-shaders.webm",
    videoType: "video/webm",
  },
  {
    isVideo: false,
    key: "touchdesigner",
    description: i18n.global.t("more.gallery.touchdesigner"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-touchdesigner.gif",
  },

  {
    isVideo: false,
    key: "perlin-noise",
    description: i18n.global.t("more.gallery.perlin-noise"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-perlin.png",
  },
  {
    isVideo: false,
    key: "boutiki",
    description: i18n.global.t("more.gallery.boutiki"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-boutiki2.png",
  },
  {
    isVideo: false,
    key: "zerog",
    description: i18n.global.t("more.gallery.zerog"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-zerog.PNG",
  },
  {
    isVideo: false,
    key: "knights",
    description: i18n.global.t("more.gallery.knights"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-knights.PNG",
  },
  {
    isVideo: false,
    key: "calculator",
    description: i18n.global.t("more.gallery.calculator"),
    link: "https://d238jsauu84mgr.cloudfront.net/more-calculator.PNG",
  },
];
</script>

<template>
  <v-row class="d-lg-flex d-inline">
    <v-col
      v-for="photo in photos"
      :key="photo.key"
      class="d-lg-flex d-inline child-flex"
      cols="2"
      lg="4"
    >
      <v-card class="w-100">
        <v-img
          v-if="!photo.isVideo"
          :src="photo.link"
          :lazy-src="photo.link"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <video height="400" v-if="photo.isVideo" controls autoplay loop muted>
          <source :src="photo.link" :type="photo.videoType" />
        </video>
        <v-card-text>{{ photo.description }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style></style>
