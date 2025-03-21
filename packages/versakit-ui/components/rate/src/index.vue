<script setup lang="ts">
import { computed, ref } from 'vue'
import type { RateProps } from '../type/index.ts'

const props = withDefaults(defineProps<RateProps>(), {
  max: 5,
  allowHalf: false,
  disabled: false,
  allowClear: true,
  character: '★',
  colors: () => ['#fadb14'],
  voidColor: '#e8e8e8',
  size: 20,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
}>()

const hoverValue = ref(-1)
const isHovering = ref(false)

const currentValue = computed(() => {
  return isHovering.value ? hoverValue.value : props.modelValue
})

const getCharacterStyle = (index: number) => {
  const value = currentValue.value

  // Calculate the fill percentage for this star
  let percent = 0
  if (value >= index + 1) {
    percent = 100
  } else if (value >= index && value < index + 1) {
    percent = (value - index) * 100
  }

  // Get the color based on the current value
  const colorIndex = Math.floor(value - 1)
  const color = props.colors[Math.min(colorIndex, props.colors.length - 1)]

  return {
    color: percent > 0 ? color : props.voidColor,
    fontSize: `${props.size}px`,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    transition: 'transform 0.2s',
    opacity: props.disabled ? 0.5 : 1,
  }
}

const handleMouseMove = (event: MouseEvent, index: number) => {
  if (props.disabled) return

  const target = event.target as HTMLElement
  const rect = target.getBoundingClientRect()
  const position = (event.clientX - rect.left) / rect.width

  let newValue = index + 1
  if (props.allowHalf) {
    newValue = position <= 0.5 ? index + 0.5 : index + 1
  }

  hoverValue.value = newValue
  isHovering.value = true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleClick = (index: any) => {
  if (props.disabled) return

  let value = hoverValue.value

  if (props.allowClear && value === props.modelValue) {
    value = 0
  }

  emit('update:modelValue', value)
  emit('change', value)
}

const handleMouseLeave = () => {
  hoverValue.value = -1
  isHovering.value = false
}
</script>

<template>
  <div
    class="rate"
    :class="{ 'is-disabled': disabled }"
    @mouseleave="handleMouseLeave"
  >
    <div
      v-for="index in max"
      :key="index"
      class="rate-item"
      @mousemove="(e) => handleMouseMove(e, index - 1)"
      @click="() => handleClick(index - 1)"
    >
      <span class="rate-character" :style="getCharacterStyle(index - 1)">
        {{ character }}
      </span>
    </div>
  </div>
</template>

<style scoped>
@import url('../style/index.css');
</style>
