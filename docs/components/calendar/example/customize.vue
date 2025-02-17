<template>
  <VerCalendar v-model="date">
    <template #date-cell="{ data }">
      <div class="custom-cell">
        <div class="custom-cell-date" :class="{ 'is-selected': data.isSelected }">
          {{ data.day.split('-').slice(2).join('') }}
        </div>
        <div class="custom-cell-text" v-if="data.type === 'current-month'">
          {{ data.isSelected ? '已选择' : '可选' }}
        </div>
      </div>
    </template>
  </VerCalendar>
</template>

<script lang="ts" setup>
import { VerCalendar } from '@versakit/ui'
import { ref } from 'vue'

const date = ref(new Date())
</script>
