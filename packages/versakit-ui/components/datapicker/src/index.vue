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
.date-picker {
  position: relative;
  display: inline-block;
}

.date-input {
  display: flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

.date-input.disabled {
  background-color: #f5f7fa;
  cursor: not-allowed;
}

.date-input input {
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  width: 120px;
}

.date-input input:disabled {
  cursor: not-allowed;
}

.calendar-icon {
  margin-left: 8px;
}

.calendar {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  width: 240px;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.month-year {
  font-weight: bold;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: bold;
  margin-bottom: 5px;
}

.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
}

.day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  cursor: pointer;
  border-radius: 4px;
}

.day.current-month {
  color: #606266;
}

.day:not(.current-month) {
  color: #c0c4cc;
}

.day:hover:not(.selected) {
  background-color: #f2f6fc;
}

.day.selected {
  background-color: #42b983;
  color: white;
}

.calendar-footer {
  margin-top: 10px;
  text-align: center;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
}

button:hover {
  background-color: #f5f7fa;
}
</style>
