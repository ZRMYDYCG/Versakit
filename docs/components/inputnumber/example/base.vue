<script setup lang="ts">
import { ref } from 'vue'
import { VKInputNumber } from '@versakit/ui'

const numberValue = ref(1)
const decimalValue = ref(0.5)
</script>

<template>
  <div class="example-box">
    <h3>整数输入示例</h3>
    <VKInputNumber v-model="numberValue" :min="0" :max="10" :step="1" />
    <div>当前值: {{ numberValue }}</div>
  </div>

  <div class="example-box">
    <h3>小数输入示例</h3>
    <VKInputNumber
      v-model="decimalValue"
      :min="0"
      :max="1"
      :step="0.1"
      :precision="1"
    />
    <div>当前值: {{ decimalValue }}</div>
  </div>
</template>

<style scoped>
.example-box {
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}
</style>
