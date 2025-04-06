<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'

defineOptions({ name: 'VerTimePicker' })

const props = defineProps({
  modelValue: {
    type: [Date, String, null],
    default: null,
  },
  placeholder: {
    type: String,
    default: '请选择时间',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  hideSeconds: {
    type: Boolean,
    default: false,
  },
  format: {
    type: String,
    default: 'HH:mm:ss',
  },
  use12Hours: {
    type: Boolean,
    default: false,
  },
  hourStep: {
    type: Number,
    default: 1,
  },
  minuteStep: {
    type: Number,
    default: 1,
  },
  secondStep: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits(['update:modelValue'])

const showPicker = ref(false)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const period = ref('AM') // AM or PM

// 引用DOM元素
const hoursRef = ref<HTMLElement | null>(null)
const minutesRef = ref<HTMLElement | null>(null)
const secondsRef = ref<HTMLElement | null>(null)

// 生成小时选项
const hourOptions = computed(() => {
  const maxHour = props.use12Hours ? 12 : 24
  const hourArr = []
  for (let i = 0; i < maxHour; i += props.hourStep) {
    if (props.use12Hours && i === 0) {
      hourArr.push(12) // 12小时制显示12而不是0
    } else {
      hourArr.push(i)
    }
  }
  return hourArr
})

// 生成分钟选项
const minuteOptions = computed(() => {
  const minuteArr = []
  for (let i = 0; i < 60; i += props.minuteStep) {
    minuteArr.push(i)
  }
  return minuteArr
})

// 生成秒选项
const secondOptions = computed(() => {
  const secondArr = []
  for (let i = 0; i < 60; i += props.secondStep) {
    secondArr.push(i)
  }
  return secondArr
})

// 格式化时间显示
const formattedTime = computed(() => {
  if (props.modelValue === null) return ''

  let hour = hours.value
  if (props.use12Hours) {
    // 12小时制格式调整
    if (period.value === 'PM' && hour < 12) {
      hour = hour + 12
    } else if (period.value === 'AM' && hour === 12) {
      hour = 0
    }
  }

  const hourStr = String(hour).padStart(2, '0')
  const minuteStr = String(minutes.value).padStart(2, '0')
  const secondStr = String(seconds.value).padStart(2, '0')

  let timeStr
  if (props.hideSeconds) {
    timeStr = `${hourStr}:${minuteStr}`
  } else {
    timeStr = `${hourStr}:${minuteStr}:${secondStr}`
  }

  if (props.use12Hours) {
    timeStr += ` ${period.value}`
  }

  return timeStr
})

// 初始化或更新时间值
const initTimeFromValue = (val: Date | string | null) => {
  if (val) {
    const date = val instanceof Date ? val : new Date(val)

    if (isNaN(date.getTime())) {
      console.error('Invalid date value:', val)
      return
    }

    const hour = date.getHours()

    if (props.use12Hours) {
      // 设置AM/PM
      if (hour >= 12) {
        period.value = 'PM'
        hours.value = hour === 12 ? 12 : hour - 12
      } else {
        period.value = 'AM'
        hours.value = hour === 0 ? 12 : hour
      }
    } else {
      hours.value = hour
    }

    minutes.value = date.getMinutes()
    seconds.value = date.getSeconds()

    // 当面板打开时，滚动到选中的时间
    nextTick(() => {
      scrollToSelected()
    })
  } else {
    // 默认值
    hours.value = props.use12Hours ? 12 : 0
    minutes.value = 0
    seconds.value = 0
    period.value = 'AM'
  }
}

// 监听modelValue变化
watch(
  () => props.modelValue,
  (val) => {
    initTimeFromValue(val)
  },
  { immediate: true },
)

// 监听面板显示状态
watch(showPicker, (val) => {
  if (val) {
    nextTick(() => {
      scrollToSelected()
    })
  }
})

// 滚动到选中的时间
const scrollToSelected = () => {
  nextTick(() => {
    // 滚动到选中的小时
    if (hoursRef.value) {
      const selectedHourEl = hoursRef.value.querySelector('.time-item.selected')
      if (selectedHourEl) {
        const container = hoursRef.value
        const itemTop = (selectedHourEl as HTMLElement).offsetTop
        const containerHeight = container.clientHeight
        container.scrollTop = itemTop - containerHeight / 2 + 16
      }
    }

    // 滚动到选中的分钟
    if (minutesRef.value) {
      const selectedMinuteEl = minutesRef.value.querySelector(
        '.time-item.selected',
      )
      if (selectedMinuteEl) {
        const container = minutesRef.value
        const itemTop = (selectedMinuteEl as HTMLElement).offsetTop
        const containerHeight = container.clientHeight
        container.scrollTop = itemTop - containerHeight / 2 + 16
      }
    }

    // 滚动到选中的秒
    if (secondsRef.value && !props.hideSeconds) {
      const selectedSecondEl = secondsRef.value.querySelector(
        '.time-item.selected',
      )
      if (selectedSecondEl) {
        const container = secondsRef.value
        const itemTop = (selectedSecondEl as HTMLElement).offsetTop
        const containerHeight = container.clientHeight
        container.scrollTop = itemTop - containerHeight / 2 + 16
      }
    }
  })
}

// 更新时间值
const updateModelValue = () => {
  let hour = hours.value

  // 12小时制转换为24小时制
  if (props.use12Hours) {
    if (period.value === 'PM' && hour < 12) {
      hour += 12
    } else if (period.value === 'AM' && hour === 12) {
      hour = 0
    }
  }

  // 使用当前日期，只修改时间部分
  const date =
    props.modelValue instanceof Date
      ? new Date(props.modelValue)
      : typeof props.modelValue === 'string' && props.modelValue
        ? new Date(props.modelValue)
        : new Date()

  date.setHours(hour)
  date.setMinutes(minutes.value)
  date.setSeconds(seconds.value)
  date.setMilliseconds(0)

  emit('update:modelValue', date)
}

// 设置时间值
const setTime = (
  type: 'hour' | 'minute' | 'second' | 'period',
  value: number | string,
) => {
  if (props.disabled) return

  if (type === 'hour') hours.value = value as number
  else if (type === 'minute') minutes.value = value as number
  else if (type === 'second') seconds.value = value as number
  else if (type === 'period') period.value = value as string

  updateModelValue()

  // 滚动到选中项
  nextTick(() => {
    scrollToSelected()
  })
}

// 清除时间值
const clearValue = (event: MouseEvent) => {
  if (props.disabled) return

  // 防止事件冒泡
  event.stopPropagation()

  emit('update:modelValue', null)
  showPicker.value = false
}

// 点击外部关闭面板
const handleClickOutside = (event: MouseEvent) => {
  const pickerEl = document.querySelector('.time-picker')
  if (pickerEl && !pickerEl.contains(event.target as Node)) {
    showPicker.value = false
  }
}

// 生命周期钩子
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="time-picker" @click.stop>
    <div
      class="time-input"
      @click="showPicker = !showPicker"
      :class="{ disabled }"
    >
      <input
        type="text"
        :value="formattedTime"
        :placeholder="placeholder"
        readonly
        :disabled="disabled"
      />
      <span class="time-icon">⏱️</span>
      <span
        v-if="clearable && formattedTime && !disabled"
        class="clear-icon"
        @click="clearValue"
      >
        ✕
      </span>
    </div>

    <div class="time-panel" v-if="showPicker && !disabled">
      <div class="time-columns">
        <!-- 小时列 -->
        <div class="time-column hours">
          <div class="time-column-header">时</div>
          <div ref="hoursRef" class="time-column-content">
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

        <!-- 分钟列 -->
        <div class="time-column minutes">
          <div class="time-column-header">分</div>
          <div ref="minutesRef" class="time-column-content">
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

        <!-- 秒列 -->
        <div class="time-column seconds" v-if="!hideSeconds">
          <div class="time-column-header">秒</div>
          <div ref="secondsRef" class="time-column-content">
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

        <!-- 上午/下午选择 -->
        <div class="time-column period" v-if="use12Hours">
          <div class="time-column-header">时段</div>
          <div class="time-column-content">
            <div
              class="time-item"
              :class="{ selected: period === 'AM' }"
              @click="setTime('period', 'AM')"
            >
              上午
            </div>
            <div
              class="time-item"
              :class="{ selected: period === 'PM' }"
              @click="setTime('period', 'PM')"
            >
              下午
            </div>
          </div>
        </div>
      </div>

      <div class="panel-footer">
        <button class="now-btn" @click="initTimeFromValue(new Date())">
          此刻
        </button>
        <button class="confirm-btn" @click="showPicker = false">确认</button>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import url('../style/index.css');
</style>
