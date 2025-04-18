<script setup lang="ts">
import { ref } from 'vue'
import { VKTab, VKTabItem } from '@versakit/ui'

const activeTab = ref('1')
</script>

<template>
  <VKTab v-model="activeTab" type="card">
    <VKTabItem label="标签1" name="1">
      <div class="content">标签1的内容</div>
    </VKTabItem>
    <VKTabItem label="标签2" name="2">
      <div class="content">标签2的内容</div>
    </VKTabItem>
    <VKTabItem label="标签3" name="3">
      <div class="content">标签3的内容</div>
    </VKTabItem>
  </VKTab>
</template>

<style scoped></style>
