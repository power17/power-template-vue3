<template>
  <h1 className="text-3xl font-bold underline">{{ msg }}</h1>
  <div>{{ width }}</div>
  <div>{{ height }}</div>
  <div class="p-4">fsofjosdfj</div>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>
<script setup lang="ts">
const msg = ref('hellowfsdf')
const { width, height } = useWindowSize()
</script>
