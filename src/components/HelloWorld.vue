<template>
  <div>hello</div>
</template>
<script setup lang="ts">
const emits = defineEmits<{
  (e: string, num: number): void
}>()
emits('click-count', 10)
</script>
