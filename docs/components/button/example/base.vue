<script setup lang="ts">
import { VKButton, VKRow } from '@versakit/ui'
</script>

<template>
  <VKRow class="mb-4">
    <VKButton type="primary">按 钮</VKButton>
    <VKButton variant="round" type="primary">按 钮</VKButton>
    <VKButton variant="ghost" type="primary">按 钮</VKButton>
    <VKButton variant="ghost round" type="primary">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton type="error">按 钮</VKButton>
    <VKButton variant="round" type="error">按 钮</VKButton>
    <VKButton variant="ghost" type="error">按 钮</VKButton>
    <VKButton variant="ghost round" type="error">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton type="success">按 钮</VKButton>
    <VKButton variant="round" type="success">按 钮</VKButton>

    <VKButton variant="ghost" type="success">按 钮</VKButton>
    <VKButton variant="ghost round" type="success">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton type="info">按 钮</VKButton>
    <VKButton variant="round" type="info">按 钮</VKButton>
    <VKButton variant="ghost" type="info">按 钮</VKButton>
    <VKButton variant="ghost round" type="info">按 钮</VKButton>
  </VKRow>

  <VKRow class="mb-4">
    <VKButton type="warn">按 钮</VKButton>
    <VKButton variant="round" type="warn">按 钮</VKButton>
    <VKButton variant="ghost" type="warn">按 钮</VKButton>
    <VKButton variant="ghost round" type="warn">按 钮</VKButton>
  </VKRow>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.vk-btn + .vk-btn {
  margin: 0px 6px;
}
</style>
