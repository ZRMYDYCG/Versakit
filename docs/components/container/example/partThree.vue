<template>
  <div class="common-layout">
    <VK-container>
      <VK-aside width="200px">Aside</VK-aside>
      <VK-main>Main</VK-main>
      <VK-aside width="200px">Aside</VK-aside>
    </VK-container>
  </div>
</template>

<script setup lang="ts">
import { VKContainer, VKAside, VKMain } from '@versakit/ui'
</script>

<style scoped>
.common-layout {
  .is-vertical {
    flex-direction: column;
  }

  .VK-aside {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c1deff;
  }

  .VK-main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ecf5ff;
    height: 150px;
  }
}
</style>
