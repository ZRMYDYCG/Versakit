<template>
  <div class="datetime-picker-demo">
    <div class="demo-section">
      <h3>基础用法</h3>
      <VerDateTimePicker v-model="dateTime1" placeholder="请选择日期和时间" />
      <div class="value-display">选中的值: {{ dateTime1 }}</div>
    </div>

    <div class="demo-section">
      <h3>显示秒选择</h3>
      <VerDateTimePicker
        v-model="dateTime2"
        placeholder="请选择日期和时间"
        :hideSeconds="false"
      />
      <div class="value-display">选中的值: {{ dateTime2 }}</div>
    </div>

    <div class="demo-section">
      <h3>禁用状态</h3>
      <VerDateTimePicker v-model="dateTime3" placeholder="禁用状态" disabled />
    </div>

    <div class="demo-section">
      <h3>不可清除</h3>
      <VerDateTimePicker
        v-model="dateTime4"
        placeholder="不可清除"
        :clearable="false"
      />
      <div class="value-display">选中的值: {{ dateTime4 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDateTimePicker } from '@versakit/ui'

// 基础用法
const dateTime1 = ref(new Date())

// 显示秒选择
const dateTime2 = ref(new Date())

// 禁用状态
const dateTime3 = ref(new Date())

// 不可清除
const dateTime4 = ref(new Date())
</script>

<style scoped>
.datetime-picker-demo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.value-display {
  margin-top: 8px;
  color: #606266;
  font-size: 14px;
}

h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
}
</style>
