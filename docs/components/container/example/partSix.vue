<template>
  <div class="common-layout">
    <VK-container>
      <VK-aside width="200px">Aside</VK-aside>
      <VK-container direction="column">
        <VK-header>Header</VK-header>
        <VK-main>Main</VK-main>
      </VK-container>
    </VK-container>
  </div>
</template>

<script setup lang="ts">
import { VKContainer, VKHeader, VKMain, VKAside } from '@versakit/ui'
</script>

<style scoped>
.common-layout {
  .vk-header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }

  .vk-aside {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #303133;
    background-color: rgb(216.8, 235.6, 255);
  }

  .vk-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }

  .vk-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c6e2ff;
  }
}
</style>
