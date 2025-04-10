<script setup lang="ts">
import { ref } from 'vue'
import { VKSplitter } from '@versakit/ui'

const horizontalSizes = ref([30, 70])
const verticalSizes = ref([40, 60])
</script>

<template>
  <h2>横</h2>
  <VKSplitter
    v-model:sizes="horizontalSizes"
    direction="horizontal"
    :min-size="20"
    :max-size="80"
  >
    <template #first>
      <div class="demo-content">
        Left Panel
        <div>Current size: {{ horizontalSizes[0] }}%</div>
      </div>
    </template>
    <template #second>
      <div class="demo-content">
        Right Panel
        <div>Current size: {{ horizontalSizes[1] }}%</div>
      </div>
    </template>
  </VKSplitter>

  <h2>竖</h2>
  <VKSplitter
    v-model:sizes="verticalSizes"
    direction="vertical"
    :min-size="30"
    :max-size="70"
  >
    <template #first>
      <div class="demo-content">
        Top Panel
        <div>Current size: {{ verticalSizes[0] }}%</div>
      </div>
    </template>
    <template #second>
      <div class="demo-content">
        Bottom Panel
        <div>Current size: {{ verticalSizes[1] }}%</div>
      </div>
    </template>
  </VKSplitter>
</template>

<style scoped></style>
