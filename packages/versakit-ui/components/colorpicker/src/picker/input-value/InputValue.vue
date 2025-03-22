<template>
  <div class="ver-color-picker-fotmate-value">
    <FormatValue
      :value="format"
      :showAlpha="props.showAlpha"
      :options="formatOptions"
      @change="onFormatChange"
    />
    <input
      class="ver-color-picker-fotmate-input"
      :style="valueStyle"
      :value.prop="value"
      @focus="onFocus"
      @input="onInput"
      @blur="onBlur"
      @keydown.enter="onEnter"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Format, InputProps } from '../../../type'
import FormatValue from './FormatValue.vue'

const props = withDefaults(defineProps<InputProps>(), {
  format: 'RGBA',
  value: '',
  showAlpha: false,
  formatOptions: false,
})

const emit = defineEmits<{
  (e: 'change', value: string): void
  (e: 'focus'): void
  (e: 'blur'): void
  (e: 'enter'): void
  (e: 'formatChange', format: Format): void
}>()

const valueStyle = computed(() => ({
  minWidth: `${props.width}px`,
  maxWidth: `${props.width}px`,
  width: `${props.width}px`,
}))

const onInput = (e: Event) => {
  emit('change', (e.target as HTMLInputElement).value)
}
const onFocus = () => emit('focus')
const onBlur = () => emit('blur')
const onEnter = () => emit('enter')
const onFormatChange = (format: Format) => emit('formatChange', format)
</script>

<style scoped>
@import '../../../style/InputValue.css';
</style>
