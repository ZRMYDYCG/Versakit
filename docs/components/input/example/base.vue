<template>
  <VKRow>
    <VKInput v-model="value" placeholder="Please input" />
  </VKRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKInput, VKRow } from '@versakit/ui'

const value = ref('')
</script>

<style scoped></style>
