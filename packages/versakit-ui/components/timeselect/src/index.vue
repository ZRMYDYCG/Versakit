<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'VerTimeSelect' })

// 时间选项类型定义
interface TimeOption {
  value: string
  label: string
  disabled: boolean
}

const props = defineProps({
  // 选中值
  modelValue: {
    type: String,
    default: '',
  },
  // 占位文本
  placeholder: {
    type: String,
    default: '请选择时间',
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false,
  },
  // 是否可清空
  clearable: {
    type: Boolean,
    default: true,
  },
  // 起始时间
  start: {
    type: String,
    default: '00:00',
  },
  // 结束时间
  end: {
    type: String,
    default: '23:59',
  },
  // 时间间隔步长
  step: {
    type: String,
    default: '00:30',
  },
  // 时间格式
  format: {
    type: String,
    default: 'HH:mm',
  },
  // 禁用的小时
  disabledHours: {
    type: Array,
    default: () => [],
  },
  // 禁用的分钟 - 直接使用数组而非函数，避免类型问题
  disabledMinutes: {
    type: Array,
    default: () => [],
  },
  // 最小时间限制
  minTime: {
    type: String,
    default: '',
  },
  // 最大时间限制
  maxTime: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

// 本地状态
const showDropdown = ref(false)
const selectedOption = ref<TimeOption | null>(null)
const searchText = ref('')
const dropdownRef = ref<HTMLElement | null>(null)
const inputRef = ref<HTMLElement | null>(null)

// 解析时间字符串为小时和分钟
const parseTimeString = (timeStr: string): { hour: number; minute: number } => {
  const [hourStr, minuteStr] = timeStr.split(':')
  return {
    hour: parseInt(hourStr, 10) || 0,
    minute: parseInt(minuteStr, 10) || 0,
  }
}

// 生成时间字符串
const formatTimeString = (hour: number, minute: number): string => {
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
}

// 比较两个时间
const compareTime = (time1: string, time2: string): number => {
  const t1 = parseTimeString(time1)
  const t2 = parseTimeString(time2)

  const minutes1 = t1.hour * 60 + t1.minute
  const minutes2 = t2.hour * 60 + t2.minute

  return minutes1 - minutes2
}

// 判断时间是否被禁用
const isTimeDisabled = (hour: number, minute: number): boolean => {
  // 检查小时是否被禁用
  if (props.disabledHours.includes(hour)) {
    return true
  }

  // 检查分钟是否被禁用
  if (props.disabledMinutes.includes(minute)) {
    return true
  }

  // 检查是否小于最小时间
  if (props.minTime) {
    const timeStr = formatTimeString(hour, minute)
    if (compareTime(timeStr, props.minTime) < 0) {
      return true
    }
  }

  // 检查是否大于最大时间
  if (props.maxTime) {
    const timeStr = formatTimeString(hour, minute)
    if (compareTime(timeStr, props.maxTime) > 0) {
      return true
    }
  }

  return false
}

// 生成时间间隔
const generateTimeRange = (): TimeOption[] => {
  const options: TimeOption[] = []
  const startTime = parseTimeString(props.start)
  const endTime = parseTimeString(props.end)
  const stepTime = parseTimeString(props.step)

  // 转换为分钟计算
  const startMinutes = startTime.hour * 60 + startTime.minute
  const endMinutes = endTime.hour * 60 + endTime.minute
  const stepMinutes = stepTime.hour * 60 + stepTime.minute || 30 // 默认30分钟

  for (
    let minutes = startMinutes;
    minutes <= endMinutes;
    minutes += stepMinutes
  ) {
    const hour = Math.floor(minutes / 60) % 24
    const minute = minutes % 60
    const timeStr = formatTimeString(hour, minute)

    // 检查时间是否被禁用
    const disabled = isTimeDisabled(hour, minute)

    options.push({
      value: timeStr,
      label: timeStr,
      disabled,
    })
  }

  return options
}

// 时间选项列表
const timeOptions = computed(() => {
  return generateTimeRange()
})

// 过滤后的选项
const filteredOptions = computed(() => {
  if (!searchText.value) {
    return timeOptions.value
  }

  return timeOptions.value.filter((option) =>
    option.label.includes(searchText.value),
  )
})

// 监听model-value变化
watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      const option = timeOptions.value.find((opt) => opt.value === value)
      selectedOption.value = option || null
    } else {
      selectedOption.value = null
    }
  },
  { immediate: true },
)

// 选择时间
const selectTime = (option: TimeOption) => {
  if (option.disabled) return

  selectedOption.value = option
  emit('update:modelValue', option.value)
  emit('change', option.value)
  showDropdown.value = false
  searchText.value = ''
}

// 清空选择
const clearSelection = (event: MouseEvent) => {
  event.stopPropagation()
  selectedOption.value = null
  emit('update:modelValue', '')
  emit('change', '')
  searchText.value = ''
}

// 处理输入变化
const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  searchText.value = target.value
}

// 处理点击外部关闭下拉框
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(target) &&
    inputRef.value &&
    !inputRef.value.contains(target)
  ) {
    showDropdown.value = false
    // 恢复原始选择
    searchText.value = ''
  }
}

// 生命周期钩子
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// 滚动到选中选项
const scrollToSelected = () => {
  if (showDropdown.value && selectedOption.value && dropdownRef.value) {
    const selectedElement = dropdownRef.value.querySelector(
      '.time-option.selected',
    )
    if (selectedElement) {
      selectedElement.scrollIntoView({ block: 'nearest' })
    }
  }
}

// 当下拉框显示时，滚动到选中项
watch(showDropdown, (value) => {
  if (value) {
    setTimeout(scrollToSelected, 0)
  }
})

// 处理键盘导航
const handleKeyDown = (event: KeyboardEvent) => {
  if (!showDropdown.value) {
    if (event.key === 'Enter' || event.key === 'ArrowDown') {
      showDropdown.value = true
      event.preventDefault()
    }
    return
  }

  const currentOptions = filteredOptions.value.filter((opt) => !opt.disabled)
  if (currentOptions.length === 0) return

  const currentIndex = selectedOption.value
    ? currentOptions.findIndex(
        (opt) => opt.value === selectedOption.value?.value,
      )
    : -1

  switch (event.key) {
    case 'ArrowDown': {
      event.preventDefault()
      const nextIndex =
        currentIndex < currentOptions.length - 1 ? currentIndex + 1 : 0
      selectTime(currentOptions[nextIndex])
      break
    }
    case 'ArrowUp': {
      event.preventDefault()
      const prevIndex =
        currentIndex > 0 ? currentIndex - 1 : currentOptions.length - 1
      selectTime(currentOptions[prevIndex])
      break
    }
    case 'Enter': {
      event.preventDefault()
      if (currentIndex >= 0) {
        selectTime(currentOptions[currentIndex])
      } else if (currentOptions.length > 0) {
        selectTime(currentOptions[0])
      }
      showDropdown.value = false
      break
    }
    case 'Escape': {
      event.preventDefault()
      showDropdown.value = false
      searchText.value = ''
      break
    }
  }
}
</script>

<template>
  <div class="ver-time-select" @keydown="handleKeyDown">
    <div
      ref="inputRef"
      class="ver-time-select__input"
      @click="showDropdown = !showDropdown"
      :class="{ 'is-disabled': disabled }"
    >
      <input
        type="text"
        :value="searchText || (selectedOption ? selectedOption.label : '')"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleInputChange"
        :readonly="!showDropdown"
      />
      <span class="ver-time-select__icon">
        <svg viewBox="0 0 1024 1024" width="16" height="16">
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
            fill="currentColor"
          ></path>
          <path
            d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      <span
        v-if="clearable && selectedOption && !disabled"
        class="ver-time-select__clear"
        @click="clearSelection"
      >
        <svg viewBox="0 0 1024 1024" width="12" height="12">
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
    </div>

    <div
      v-if="showDropdown && !disabled"
      ref="dropdownRef"
      class="ver-time-select__dropdown"
    >
      <div v-if="filteredOptions.length === 0" class="ver-time-select__empty">
        无匹配时间
      </div>
      <div
        v-for="option in filteredOptions"
        :key="option.value"
        class="ver-time-select__option"
        :class="{
          'is-selected':
            selectedOption && selectedOption.value === option.value,
          'is-disabled': option.disabled,
        }"
        @click="selectTime(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<style>
.ver-time-select {
  position: relative;
  display: inline-block;
  width: 180px;
  font-size: 14px;
  color: #606266;
}

.ver-time-select__input {
  display: flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  padding: 0 12px;
  height: 36px;
  box-sizing: border-box;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease;
}

.ver-time-select__input:hover {
  border-color: #c0c4cc;
}

.ver-time-select__input.is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

.ver-time-select__input input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: #606266;
  font-size: 14px;
  padding: 0;
  cursor: inherit;
}

.ver-time-select__input input:disabled {
  cursor: not-allowed;
  color: #c0c4cc;
}

.ver-time-select__icon {
  margin-left: 8px;
  color: #909399;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ver-time-select__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  color: #c0c4cc;
  cursor: pointer;
  transition: color 0.2s;
}

.ver-time-select__clear:hover {
  color: #909399;
}

.ver-time-select__dropdown {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  max-height: 274px;
  background: white;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
  scrollbar-width: thin;
}

.ver-time-select__dropdown::-webkit-scrollbar {
  width: 6px;
}

.ver-time-select__dropdown::-webkit-scrollbar-thumb {
  background-color: #e4e7ed;
  border-radius: 3px;
}

.ver-time-select__dropdown::-webkit-scrollbar-track {
  background-color: transparent;
}

.ver-time-select__option {
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #606266;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.ver-time-select__option:hover {
  background-color: #f5f7fa;
}

.ver-time-select__option.is-selected {
  color: #409eff;
  font-weight: bold;
  background-color: #f0f9ff;
}

.ver-time-select__option.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-color: #f5f7fa;
}

.ver-time-select__empty {
  padding: 10px 0;
  text-align: center;
  color: #909399;
  font-size: 14px;
}
</style>
