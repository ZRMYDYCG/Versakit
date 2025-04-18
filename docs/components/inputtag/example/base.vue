<script setup lang="ts">
import { ref } from 'vue'
import { VKInputTag } from '@versakit/ui'

const tags = ref<string[]>(['Vue', 'TypeScript'])
</script>

<template>
  <div>
    <VKInputTag v-model="tags" placeholder="Enter tags..." />
  </div>
</template>

<style scoped></style>
