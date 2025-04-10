<template>
  <VKCalendar ref="calendar">
    <template
      #header="{ date, prevMonth, nextMonth, prevYear, nextYear, today }"
    >
      <div class="custom-header">
        <span class="custom-header-title">
          {{ date.getFullYear() }}年{{ date.getMonth() + 1 }}月
        </span>

        <VKButton type="primary" size="sm" @click="prevYear">上一年</VKButton>
        <VKButton type="primary" size="sm" @click="nextYear">下一年</VKButton>
        <VKButton type="primary" size="sm" @click="prevMonth">上个月</VKButton>

        <VKButton type="primary" size="sm" @click="today">今天</VKButton>
        <VKButton type="primary" size="sm" @click="nextMonth">下个月</VKButton>
        <VKButton type="primary" size="sm" @click="nextYear">下一年</VKButton>
      </div>
    </template>
  </VKCalendar>
</template>

<script lang="ts" setup>
import { VKCalendar, VKButton } from '@versakit/ui'
</script>
<style>
.custom-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
}
.custom-header-title {
  margin: auto;
}
</style>
