<script setup lang="ts"></script>

<template>
  <div>
    <div class="d-lg-flex justify-center align-center">
      <div class="ma-4 w-50">
        <h1>{{ $t("home.whoami") }}</h1>
        <h3>{{ $t("home.iam-intro") }}andrewmeservy@gmail.com.</h3>
      </div>

      <div class="ma-4 d-flex justify-center">
        <v-card>
          <v-img
            width="350"
            src="https://d238jsauu84mgr.cloudfront.net/profilePic.webp"
            cover
          ></v-img>
        </v-card>
      </div>
    </div>
    <v-divider></v-divider>
    <div class="d-lg-flex justify-center mb-6">
      <v-sheet class="ma-8 pa-2">
        <v-card width="300px" height="200px" href="/software">
          <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4"
            >Software</v-card-title
          >
          <v-card-text>
            {{ $t("home.software-intro") }}
          </v-card-text>
          <v-img
            src="https://d238jsauu84mgr.cloudfront.net/software-intro.png"
            height="125"
            cover
            class="bg-grey-lighten-2"
          ></v-img>
        </v-card>
      </v-sheet>
      <v-sheet class="ma-8 pa-2">
        <v-card width="300px" height="200px" href="/audio">
          <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4"
            >Audio</v-card-title
          >
          <v-card-text>
            {{ $t("home.audio-intro") }}
          </v-card-text>
          <v-img
            src="https://d238jsauu84mgr.cloudfront.net/audio-intro.jpg"
            height="125"
            cover
            class="bg-grey-lighten-2"
          ></v-img>
        </v-card>
      </v-sheet>
      <v-sheet class="ma-8 pa-2">
        <v-card width="300px" height="200px" href="/more">
          <v-card-title class="text-xs-h6 text-md-h5 text-lg-h4">{{
            $t("home.more")
          }}</v-card-title>
          <v-card-text>
            {{ $t("home.more-intro") }}
          </v-card-text>
          <v-img
            src="https://d238jsauu84mgr.cloudfront.net/more-intro.jpg"
            height="125"
            cover
            class="bg-grey-lighten-2"
          ></v-img>
        </v-card>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped></style>
