<template>
  <h1 className="text-3xl font-bold underline">{{ msg }}</h1>
  <div>{{ width }}</div>
  <div>{{ height }}</div>
  <HelloWorld></HelloWorld>
</template>
<script setup lang="ts">
const msg = ref('hellowfsdf')
const { width, height } = useWindowSize()
</script>
