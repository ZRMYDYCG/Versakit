<script setup lang="ts">
import { ref, computed, watch } from 'vue'

defineOptions({ name: 'VerDateTimePicker' })

const props = defineProps({
  modelValue: {
    type: [Date, String],
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Select date & time',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  format: {
    type: String,
    default: 'YYYY-MM-DD HH:mm',
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  hideSeconds: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const showPicker = ref(false)
const selectedDate = ref<Date | null>(null)
const currentMonth = ref(new Date().getMonth())
const currentYear = ref(new Date().getFullYear())
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const activeTab = ref('date') // 'date' or 'time'

// 生成0-23小时选项
const hourOptions = computed(() => {
  return Array.from({ length: 24 }, (_, i) => i)
})

// 生成0-59分钟选项
const minuteOptions = computed(() => {
  return Array.from({ length: 60 }, (_, i) => i)
})

// 生成0-59秒选项
const secondOptions = computed(() => {
  return Array.from({ length: 60 }, (_, i) => i)
})

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

  // Add days to complete calendar grid (6 rows x 7 columns)
  const totalCells = 42
  const nextMonthDays = totalCells - daysArray.length
  for (let i = 1; i <= nextMonthDays; i++) {
    daysArray.push({
      day: i,
      currentMonth: false,
    })
  }

  return daysArray
})

const formattedDateTime = computed(() => {
  if (!selectedDate.value) return ''

  const date = selectedDate.value
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hour = String(hours.value).padStart(2, '0')
  const minute = String(minutes.value).padStart(2, '0')
  const second = String(seconds.value).padStart(2, '0')

  if (props.hideSeconds) {
    return `${year}-${month}-${day} ${hour}:${minute}`
  } else {
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
  }
})

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      const date = val instanceof Date ? val : new Date(val)
      selectedDate.value = date
      hours.value = date.getHours()
      minutes.value = date.getMinutes()
      seconds.value = date.getSeconds()
    } else {
      selectedDate.value = null
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
    }
  },
  { immediate: true },
)

const updateDateTime = () => {
  if (selectedDate.value) {
    const newDate = new Date(selectedDate.value)
    newDate.setHours(hours.value)
    newDate.setMinutes(minutes.value)
    newDate.setSeconds(seconds.value)
    selectedDate.value = newDate
    emit('update:modelValue', newDate)
  }
}

const selectDate = (day: number, isCurrentMonth: boolean) => {
  if (!isCurrentMonth) {
    if (day > 15) {
      // Previous month
      prevMonth()
    } else {
      // Next month
      nextMonth()
    }
    setTimeout(() => selectDate(day, true), 0)
    return
  }

  const newDate = selectedDate.value ? new Date(selectedDate.value) : new Date()
  newDate.setFullYear(currentYear.value)
  newDate.setMonth(currentMonth.value)
  newDate.setDate(day)

  // Preserve time if already set
  if (selectedDate.value) {
    newDate.setHours(hours.value)
    newDate.setMinutes(minutes.value)
    newDate.setSeconds(seconds.value)
  } else {
    hours.value = newDate.getHours()
    minutes.value = newDate.getMinutes()
    seconds.value = newDate.getSeconds()
  }

  selectedDate.value = newDate
  emit('update:modelValue', newDate)

  // Switch to time tab after selecting date
  activeTab.value = 'time'
}

const setTime = (type: 'hour' | 'minute' | 'second', value: number) => {
  if (type === 'hour') hours.value = value
  if (type === 'minute') minutes.value = value
  if (type === 'second') seconds.value = value

  if (selectedDate.value) {
    updateDateTime()
  } else {
    // If no date selected, use today's date
    const today = new Date()
    today.setHours(hours.value)
    today.setMinutes(minutes.value)
    today.setSeconds(seconds.value)
    selectedDate.value = today
    currentMonth.value = today.getMonth()
    currentYear.value = today.getFullYear()
    emit('update:modelValue', today)
  }
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
  hours.value = now.getHours()
  minutes.value = now.getMinutes()
  seconds.value = now.getSeconds()
  emit('update:modelValue', now)
}

const clearValue = () => {
  selectedDate.value = null
  emit('update:modelValue', null)
  showPicker.value = false
}

const confirm = () => {
  updateDateTime()
  showPicker.value = false
}
</script>

<template>
  <div class="date-time-picker">
    <div
      class="date-time-input"
      @click="showPicker = !showPicker"
      :class="{ disabled: disabled }"
    >
      <input
        type="text"
        :value="formattedDateTime"
        :placeholder="placeholder"
        readonly
        :disabled="disabled"
      />
      <span class="calendar-icon">🗓️</span>
      <span
        v-if="clearable && formattedDateTime && !disabled"
        class="clear-icon"
        @click.stop="clearValue"
      >
        ✕
      </span>
    </div>

    <div class="date-time-panel" v-if="showPicker && !disabled">
      <div class="panel-tabs">
        <div
          class="tab"
          :class="{ active: activeTab === 'date' }"
          @click="activeTab = 'date'"
        >
          日期
        </div>
        <div
          class="tab"
          :class="{ active: activeTab === 'time' }"
          @click="activeTab = 'time'"
        >
          时间
        </div>
      </div>

      <!-- 日期面板 -->
      <div class="date-panel" v-show="activeTab === 'date'">
        <div class="calendar-header">
          <button @click="prevMonth">&lt;</button>
          <div class="month-year">{{ monthName }} {{ currentYear }}</div>
          <button @click="nextMonth">&gt;</button>
        </div>

        <div class="weekdays">
          <div
            v-for="day in ['日', '一', '二', '三', '四', '五', '六']"
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
          <button @click="today">今天</button>
        </div>
      </div>

      <!-- 时间面板 -->
      <div class="time-panel" v-show="activeTab === 'time'">
        <div class="time-columns">
          <div class="time-column hours">
            <div class="time-column-header">时</div>
            <div class="time-column-content">
              <div
                v-for="hour in hourOptions"
                :key="hour"
                class="time-item"
                :class="{ selected: hours === hour }"
                @click="setTime('hour', hour)"
              >
                {{ String(hour).padStart(2, '0') }}
              </div>
            </div>
          </div>

          <div class="time-column minutes">
            <div class="time-column-header">分</div>
            <div class="time-column-content">
              <div
                v-for="minute in minuteOptions"
                :key="minute"
                class="time-item"
                :class="{ selected: minutes === minute }"
                @click="setTime('minute', minute)"
              >
                {{ String(minute).padStart(2, '0') }}
              </div>
            </div>
          </div>

          <div class="time-column seconds" v-if="!hideSeconds">
            <div class="time-column-header">秒</div>
            <div class="time-column-content">
              <div
                v-for="second in secondOptions"
                :key="second"
                class="time-item"
                :class="{ selected: seconds === second }"
                @click="setTime('second', second)"
              >
                {{ String(second).padStart(2, '0') }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="panel-footer">
        <button class="cancel-btn" @click="showPicker = false">取消</button>
        <button class="confirm-btn" @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url('../style/index.css');
</style>
