<script setup lang="ts">
import { VerScrollBar } from '@versakit/ui'
</script>

<template>
  <VerScrollBar>
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </VerScrollBar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  color: #fff;
  background-color: var(--theme-primary-500, var(--ver-primary-500));
}
</style>
