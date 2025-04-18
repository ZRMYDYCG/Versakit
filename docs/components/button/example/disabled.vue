<script setup lang="ts">
import { VKButton, VKRow } from '@versakit/ui'
</script>

<template>
  <VKRow class="mb-4">
    <VKButton disabled color="red-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="red-1">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton disabled color="blue-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="blue-1">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton disabled color="green-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="green-1">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton disabled color="zinc-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="zinc-1">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton disabled color="violet-5">按 钮</VKButton>
    <VKButton disabled variant="plain round" color="violet-1">按 钮</VKButton>
  </VKRow>
</template>

<style scoped>
.mb-4 {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 10px;
}
</style>
