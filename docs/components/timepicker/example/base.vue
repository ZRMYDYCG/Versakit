<template>
  <div class="time-picker-demo">
    <div class="demo-section">
      <h3>基础用法</h3>
      <div class="flex-row">
        <VKTimePicker v-model="time1" placeholder="请选择时间" />
        <div class="value-display">选中的值: {{ formattedTime(time1) }}</div>
      </div>
    </div>

    <div class="demo-section">
      <h3>隐藏秒选择</h3>
      <div class="flex-row">
        <VKTimePicker
          v-model="time2"
          placeholder="请选择时间"
          :hideSeconds="true"
        />
        <div class="value-display">
          选中的值: {{ formattedTime(time2, true) }}
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>12小时制</h3>
      <div class="flex-row">
        <VKTimePicker
          v-model="time3"
          placeholder="请选择时间"
          :use12Hours="true"
        />
        <div class="value-display">
          选中的值:
          {{
            formattedTime(time3) +
            (time3 ? (time3.getHours() >= 12 ? ' PM' : ' AM') : '')
          }}
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>步长设置</h3>
      <div class="flex-row">
        <VKTimePicker
          v-model="time4"
          placeholder="请选择时间"
          :hourStep="2"
          :minuteStep="15"
          :secondStep="30"
        />
        <div class="value-display">
          <p>小时步长：2，分钟步长：15，秒步长：30</p>
          <p>选中的值: {{ formattedTime(time4) }}</p>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>禁用状态</h3>
      <div class="flex-row">
        <VKTimePicker v-model="time5" placeholder="禁用状态" disabled />
        <div class="value-display">选中的值: {{ formattedTime(time5) }}</div>
      </div>
    </div>

    <div class="demo-section">
      <h3>不可清除</h3>
      <div class="flex-row">
        <VKTimePicker
          v-model="time6"
          placeholder="不可清除"
          :clearable="false"
        />
        <div class="value-display">选中的值: {{ formattedTime(time6) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKTimePicker } from '@versakit/ui'

// 基础用法
const time1 = ref(new Date())

// 隐藏秒选择
const time2 = ref(new Date())

// 12小时制
const time3 = ref(new Date())

// 步长设置
const time4 = ref(new Date())

// 禁用状态
const time5 = ref(new Date())

// 不可清除
const time6 = ref(new Date())

// 格式化时间显示
const formattedTime = (date: Date | null, hideSeconds = false) => {
  if (!date) return '无'

  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')

  return hideSeconds ? `${hour}:${minute}` : `${hour}:${minute}:${second}`
}
</script>

<style scoped>
.time-picker-demo {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background-color: #ffffff;
}

.flex-row {
  display: flex;
  align-items: center;
  gap: 24px;
}

.value-display {
  margin-top: 8px;
  color: #606266;
  font-size: 14px;
}

h3 {
  margin: 0 0 16px 0;
  font-size: 16px;
  font-weight: 500;
  color: #303133;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.size-label {
  font-size: 14px;
  color: #606266;
}

/* 深色系主题样式 (仅作示例) */
:deep([class*='ver-']) {
  --ver-primary-500: #409eff;
}
</style>
