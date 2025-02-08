<script setup lang="ts">
import { ref } from 'vue'
import { VerTab, VerTabItem } from '@versakit/ui'

const activeTab = ref('1')
</script>

<template>
  <VerTab v-model="activeTab">
    <VerTabItem label="标签1" name="1">
      <div class="content">标签1的内容</div>
    </VerTabItem>
    <VerTabItem label="标签2" name="2">
      <div class="content">标签2的内容</div>
    </VerTabItem>
    <VerTabItem label="标签3" name="3">
      <div class="content">标签3的内容</div>
    </VerTabItem>
  </VerTab>
</template>

<style scoped></style>
