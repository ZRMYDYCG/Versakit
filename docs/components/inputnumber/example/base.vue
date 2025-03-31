<script setup lang="ts">
import { ref } from 'vue'
import { VerInputNumber } from '@versakit/ui'

const value1 = ref(1)
const value2 = ref(1)
const value3 = ref(5)
</script>

<template>
  <div class="demo-input-number">
    <p>基础用法：</p>
    <VerInputNumber v-model="value1" />

    <p>禁用状态：</p>
    <VerInputNumber v-model="value2" disabled />

    <p>限制范围与步长：</p>
    <VerInputNumber
      v-model="value3"
      :min="0"
      :max="10"
      :step="2"
      :precision="1"
      placeholder="请输入"
    />
  </div>
</template>

<style scoped>
.demo-input-number {
  p {
    margin: 20px 0 5px;
  }
}
</style>
