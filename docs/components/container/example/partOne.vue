<template>
  <div class="common-layout">
    <VK-container direction="column">
      <VK-header>Header</VK-header>
      <VK-main>Main</VK-main>
    </VK-container>
  </div>
</template>

<script setup lang="ts">
import { VKContainer, VKHeader, VKMain } from '@versakit/ui'
</script>

<style scoped>
.common-layout {
  .vk-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
  .vk-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }
}
</style>
