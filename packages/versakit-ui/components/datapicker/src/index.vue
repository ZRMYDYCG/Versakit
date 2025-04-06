<script setup lang="ts">
import { ref, computed, watch } from 'vue'

defineOptions({ name: 'VerDatePicker' })

const props = defineProps({
  modelValue: {
    type: [Date, String],
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Select date',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const showCalendar = ref(false)
const selectedDate = ref<Date | null>(null)
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())

const daysInMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
})

const firstDayOfMonth = computed(() => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay()
})

const monthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString(
    'default',
    { month: 'long' },
  )
})

const days = computed(() => {
  const daysArray = []
  const prevMonthDays = new Date(
    currentYear.value,
    currentMonth.value,
    0,
  ).getDate()

  // Previous month days
  for (let i = 0; i < firstDayOfMonth.value; i++) {
    daysArray.push({
      day: prevMonthDays - firstDayOfMonth.value + i + 1,
      currentMonth: false,
    })
  }

  // Current month days
  for (let i = 1; i <= daysInMonth.value; i++) {
    daysArray.push({
      day: i,
      currentMonth: true,
    })
  }

  return daysArray
})

const formattedDate = computed(() => {
  if (!selectedDate.value) return ''
  return selectedDate.value.toLocaleDateString()
})

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      selectedDate.value = val instanceof Date ? val : new Date(val)
    } else {
      selectedDate.value = null
    }
  },
  { immediate: true },
)

const selectDate = (day: number, isCurrentMonth: boolean) => {
  if (!isCurrentMonth) return

  selectedDate.value = new Date(currentYear.value, currentMonth.value, day)
  emit('update:modelValue', selectedDate.value)
  showCalendar.value = false
}

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

const today = () => {
  const now = new Date()
  selectedDate.value = now
  currentMonth.value = now.getMonth()
  currentYear.value = now.getFullYear()
  emit('update:modelValue', selectedDate.value)
  showCalendar.value = false
}
</script>

<template>
  <div class="date-picker">
    <div
      class="date-input"
      @click="showCalendar = !showCalendar"
      :class="{ disabled: disabled }"
    >
      <input
        type="text"
        :value="formattedDate"
        :placeholder="placeholder"
        readonly
        :disabled="disabled"
      />
      <span class="calendar-icon">📅</span>
    </div>

    <div class="calendar" v-if="showCalendar && !disabled">
      <div class="calendar-header">
        <button @click="nextMonth">&lt;</button>
        <div class="month-year">{{ monthName }} {{ currentYear }}</div>
        <button @click="prevMonth">&gt;</button>
      </div>

      <div class="weekdays">
        <div
          v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']"
          :key="day"
        >
          {{ day }}
        </div>
      </div>

      <div class="days">
        <div
          v-for="(day, index) in days"
          :key="index"
          class="day"
          :class="{
            'current-month': day.currentMonth,
            selected:
              day.currentMonth &&
              selectedDate &&
              selectedDate.getDate() === day.day &&
              selectedDate.getMonth() === currentMonth &&
              selectedDate.getFullYear() === currentYear,
          }"
          @click="selectDate(day.day, day.currentMonth)"
        >
          {{ day.day }}
        </div>
      </div>

      <div class="calendar-footer">
        <button @click="today">Today</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url('../style/index.css');
</style>
