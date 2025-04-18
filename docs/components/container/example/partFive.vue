<template>
  <div class="common-layout">
    <VKContainer direction="column">
      <VKHeader>Header</VKHeader>
      <VK-container>
        <VKAside width="200px">Aside</VKAside>
        <VK-container direction="column">
          <VKMain>Main</VKMain>
          <VKFooter>Footer</VKFooter>
        </VK-container>
      </VK-container>
    </VKContainer>
  </div>
</template>

<script setup lang="ts">
import { VKContainer, VKHeader, VKMain, VKAside, VKFooter } from '@versakit/ui'
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
