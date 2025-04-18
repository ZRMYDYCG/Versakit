<script setup lang="ts">
import { VKButton, VKRow } from '@versakit/ui'
</script>

<template>
  <VKRow class="mb-4">
    <VKButton color="blue-1">按 钮</VKButton>
    <VKButton color="blue-2">按 钮</VKButton>
    <VKButton color="blue-3">按 钮</VKButton>
    <VKButton color="blue-4">按 钮</VKButton>
    <VKButton color="blue-5">按 钮</VKButton>
  </VKRow>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
