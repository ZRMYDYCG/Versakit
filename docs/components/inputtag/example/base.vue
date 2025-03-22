<script setup lang="ts">
import { ref } from 'vue'
import { VerInputTag } from '@versakit/ui'

const tags = ref<string[]>(['Vue', 'TypeScript'])
</script>

<template>
  <div>
    <VerInputTag v-model="tags" placeholder="Enter tags..." />
  </div>
</template>

<style scoped></style>
