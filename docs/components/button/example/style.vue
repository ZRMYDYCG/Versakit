<template>
  <div>
    <VKSegmented v-model="typeValue" :options="typeOptions" />
    <VKSegmented v-model="variantValue" :options="variantOptions" />

    <VKButton :type="typeValue" :variant="variantValue">按 钮</VKButton>
  </div>
</template>
<script setup lang="ts">
import { VKButton, VKSegmented } from '@versakit/ui'
import { ref } from 'vue'

let typeValue = ref('primary')
let variantValue = ref('plain')

let typeOptions = [
  { label: 'primary', value: 'primary' },
  { label: 'success', value: 'success' },
  { label: 'error', value: 'error' },
  { label: 'warn', value: 'warn' },
  { label: 'info', value: 'info' },
]

let variantOptions = [
  { label: 'ghost', value: 'ghost' },
  { label: 'round', value: 'round' },
  { label: 'text', value: 'text' },
  { label: 'shade', value: 'shade' },
  { label: 'full', value: 'full' },
]
</script>
<style scoped></style>
