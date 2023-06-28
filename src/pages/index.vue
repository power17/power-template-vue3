<template>
  <h1 className="text-3xl font-bold underline">{{ msg }}</h1>
  <div>{{ width }}</div>
  <div>{{ height }}</div>
  <HelloWorld></HelloWorld>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>
<script setup lang="ts">
const msg = ref('hellowfsdf')
const { width, height } = useWindowSize()
</script>
