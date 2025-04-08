<template>
  <div
    class="ver-select"
    :class="{
      'is-disabled': disabled,
      'is-clearable': clearable,
      'is-multiple': multiple,
    }"
    :style="style"
    ref="selectRef"
  >
    <div class="ver-select__input" @click="toggleDropdown">
      <div class="ver-select__value">
        <template v-if="multiple">
          <div class="ver-select__tags">
            <span
              v-for="tag in selectedTags"
              :key="tag.value"
              class="ver-select__tag"
            >
              {{ tag.label }}
              <span
                class="ver-select__tag-close"
                @click.stop="removeTag(tag.value)"
              >
                ×
              </span>
            </span>
          </div>
        </template>
        <template v-else>
          <span v-if="selectedLabel">{{ selectedLabel }}</span>
          <span v-else class="ver-select__placeholder">{{ placeholder }}</span>
        </template>
      </div>
      <span class="ver-select__arrow" :class="{ 'is-reverse': isOpen }">▼</span>
      <span
        v-if="clearable && modelValue"
        class="ver-select__clear"
        @click.stop="handleClear"
      >
        ×
      </span>
    </div>

    <Transition name="ver-select-fade">
      <div v-show="isOpen" class="ver-select__dropdown">
        <div class="ver-select__search" v-if="filterable">
          <input
            ref="searchInput"
            v-model="searchQuery"
            class="ver-select__search-input"
            type="text"
            @click.stop
          />
        </div>
        <div class="ver-select__options">
          <div
            v-for="option in filteredOptions"
            :key="option.value"
            class="ver-select__option"
            :class="{
              'is-selected': isSelected(option.value),
              'is-disabled': option.disabled,
            }"
            @click.stop="handleOptionClick(option)"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onUnmounted } from 'vue'
import type { SelectProps, SelectEmits, SelectOption } from '../type'

defineOptions({ name: 'VerSelect' })

const props = withDefaults(defineProps<SelectProps>(), {
  modelValue: '',
  multiple: false,
  disabled: false,
  clearable: false,
  placeholder: '请选择',
  options: () => [],
  filterable: false,
})

const emit = defineEmits<SelectEmits>()

const selectRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const searchQuery = ref('')
const searchInput = ref<HTMLInputElement | null>(null)

const selectedLabel = computed(() => {
  if (!props.modelValue) return ''
  const option = props.options.find((opt) => opt.value === props.modelValue)
  return option?.label || ''
})

const selectedTags = computed(() => {
  if (!props.multiple || !Array.isArray(props.modelValue)) return []
  return props.modelValue
    .map((value) => props.options.find((opt) => opt.value === value))
    .filter((opt): opt is SelectOption => !!opt)
})

const filteredOptions = computed(() => {
  if (!props.filterable || !searchQuery.value) return props.options
  const query = searchQuery.value.toLowerCase()
  return props.options.filter((option) =>
    option.label.toLowerCase().includes(query),
  )
})

const isSelected = (value: string | number) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value)
  }
  return props.modelValue === value
}

const closeDropdown = () => {
  isOpen.value = false
  emit('visible-change', false)
}

const toggleDropdown = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
  emit('visible-change', isOpen.value)
  if (isOpen.value && props.filterable) {
    nextTick(() => {
      searchInput.value?.focus()
    })
  }
}

const handleOptionClick = (option: SelectOption) => {
  if (option.disabled) return
  if (props.multiple) {
    const newValue = Array.isArray(props.modelValue)
      ? [...props.modelValue]
      : []
    const index = newValue.indexOf(option.value)
    if (index > -1) {
      newValue.splice(index, 1)
    } else {
      newValue.push(option.value)
    }
    emit('update:modelValue', newValue)
    emit('change', newValue)
  } else {
    emit('update:modelValue', option.value)
    emit('change', option.value)
    isOpen.value = false
  }
}

const handleClear = () => {
  emit('update:modelValue', props.multiple ? [] : '')
  emit('clear')
}

const removeTag = (value: string | number) => {
  if (props.disabled) return
  const newValue = Array.isArray(props.modelValue)
    ? props.modelValue.filter((v) => v !== value)
    : []
  emit('update:modelValue', newValue)
  emit('remove-tag', value)
}

// 处理点击外部关闭下拉框
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  if (selectRef.value && !selectRef.value.contains(target)) {
    closeDropdown()
  }
}

// 监听点击事件
watch(isOpen, (val) => {
  if (val) {
    document.addEventListener('click', handleClickOutside)
  } else {
    document.removeEventListener('click', handleClickOutside)
  }
})

// 组件卸载时移除事件监听器
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

watch(
  () => props.modelValue,
  () => {
    if (!props.multiple) {
      isOpen.value = false
    }
  },
)
</script>

<style>
@import '../style/index.css';
</style>
