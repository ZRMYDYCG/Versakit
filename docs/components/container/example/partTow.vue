<template>
  <div class="common-layout">
    <VK-container direction="column">
      <VK-header>Header</VK-header>
      <VK-main>Main</VK-main>
      <VK-footer>Footer</VK-footer>
    </VK-container>
  </div>
</template>

<script setup lang="ts">
import { VKContainer, VKHeader, VKMain, VKFooter } from '@versakit/ui'
</script>

<style scoped>
.common-layout {
  .VK-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
  .VK-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }

  .VK-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
}
</style>
