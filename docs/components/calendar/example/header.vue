<template>
  <VerCalendar ref="calendar">
    <template
      #header="{ date, prevMonth, nextMonth, prevYear, nextYear, today }"
    >
      <div class="custom-header">
        <span class="custom-header-title">
          {{ date.getFullYear() }}年{{ date.getMonth() + 1 }}月
        </span>

        <VerButton type="primary" size="sm" @click="prevYear">上一年</VerButton>
        <VerButton type="primary" size="sm" @click="nextYear">下一年</VerButton>
        <VerButton type="primary" size="sm" @click="prevMonth">
          上个月
        </VerButton>

        <VerButton type="primary" size="sm" @click="today">今天</VerButton>
        <VerButton type="primary" size="sm" @click="nextMonth">
          下个月
        </VerButton>
        <VerButton type="primary" size="sm" @click="nextYear">下一年</VerButton>
      </div>
    </template>
  </VerCalendar>
</template>

<script lang="ts" setup>
import { VerCalendar } from '@versakit/ui'
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
