<template>
  <div>
    <VKProgress type="circle" :percent />
    <VKProgress type="circle" :percent status="success" />
    <VKProgress type="circle" :percent status="error" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKProgress } from '@versakit/ui'

const percent = ref(75)
</script>

<style scoped>
.progress {
  margin: 20px;
}
</style>
