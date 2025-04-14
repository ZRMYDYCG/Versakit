<script setup lang="ts">
import { ref } from 'vue'
import { VKFlex, VKRadio } from '@versakit/ui'

const direction = ref('horizontal')
</script>

<template>
  <div>
    <VKRadio label="horizontal" v-model="direction">horizontal</VKRadio>
    <VKRadio label="vertical" v-model="direction">vertical</VKRadio>
  </div>
  <VKFlex :vertical="direction === 'vertical'">
    <div v-for="n in 4" :key="n" class="flex-item" />
  </VKFlex>
</template>

<style scoped>
.flex-item {
  width: 25%;
  height: 80px;
  background-color: var(--theme-primary-500, var(--vk-primary-500));
}
</style>
