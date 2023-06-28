<template>
  <h1 className="text-3xl font-bold underline">{{ msg }}</h1>
  <div>{{ width }}</div>
  <div>{{ height }}</div>
  <div class="p-4">fsofjosdfj</div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <i-mdi-account></i-mdi-account>
  <!-- A basic anchor icon from Phosphor icons -->
  <div class="i-ph-anchor-simple-thin" />
  <!-- An orange alarm from Material Design Icons -->
  <div class="i-mdi-alarm text-orange-400" />
  <!-- A large Vue logo -->
  <div class="i-logos-vue text-3xl" />
  <!-- Sun in light mode, Moon in dark mode, from Carbon -->
  <button class="i-carbon-sun dark:i-carbon-moon" />
  <!-- Twemoji of laugh, turns to tear on hovering -->
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
  <div class="i-solar:add-square-broken"></div>
</template>
<script setup lang="ts">
const msg = ref('hellowfsdf')
const { width, height } = useWindowSize()
</script>
<route lang="yaml">
meta:
  layout: default
</route>
