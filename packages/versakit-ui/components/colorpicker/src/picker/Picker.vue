<template>
  <div class="ver-color-picker-picker" :style="pickerStyle">
    <div class="ver-color-picker-picker-inner">
      <div class="ver-color-picker-picker-header">
        <saturation
          class="ver-color-picker-saturation"
          :hue="h"
          :saturation="s"
          :value="v"
          @change="onSelectSaturation"
        />
        <hue class="ver-color-picker-hue" :hue="h" @change="onSelectHue" />
        <alpha
          class="ver-color-picker-alpha"
          :alpha="a"
          :color="rgbStr"
          @change="onSelectAlpha"
          v-if="showAlpha"
        />
      </div>
      <input-value
        :format="handleInputFormat(format)"
        :value="colorValue"
        :showAlpha="showAlpha"
        :width="showAlpha ? 150 : 125"
        :formatOptions="formatOptions"
        @change="onInputChange"
        @blur="handleChange"
        @enter="handleChange"
        @formatChange="onFormatChange"
      />
      <Colors
        class="ver-color-picker-colors"
        v-if="colors.length > 0"
        :colors="colors"
        :selected-index="selectColorIndex"
        @change="onSelectColor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, unref } from 'vue'
import type { CSSProperties } from 'vue'
import type { PickerProps } from '../../type'
import Saturation from './Saturation.vue'
import Hue from './Hue.vue'
import Alpha from './Alpha.vue'
import InputValue from './input-value'
import Colors from './Colors.vue'
import {
  hsvFormat,
  hsv2rgb,
  transformHsva,
  checkColorFormat,
  filterHsva,
  checkHsva,
} from '../utils'
import { ALPHA_FORMAT_MAP, type Format, FORMAT_MAP } from '../constant'

const props = withDefaults(defineProps<PickerProps>(), {
  value: '',
  format: 'rgb',
  showAlpha: false,
  colors: () => [],
  formatOptions: false,
  style: () => ({}),
})

const emit = defineEmits(['change', 'formatChange'])

const pickerStyle = computed<Partial<CSSProperties>>(() => ({
  ...props.style,
  width: props.showAlpha ? '230px' : '205px',
}))

const hsva = ref()
const cacheHsva = ref()
const colorValue = ref()
const selectColorIndex = ref(-1)

const handleTransformValue = () => {
  const value = props.value?.trim()
  if (value?.length) {
    const format = checkColorFormat(value)
    return filterHsva(transformHsva(value, format, props.showAlpha))
  }
  return null
}

watch(
  () => props.value,
  () => {
    if (props.value !== colorValue.value) {
      hsva.value = handleTransformValue()
    }
  },
  { immediate: true },
)

watch(
  [() => hsva.value, () => props.format],
  ([newHsva], [oldHsva]) => {
    //   ([newHsva, oldFormat], [oldHsva]) => {

    let color = ''
    if (newHsva) {
      color = hsvFormat({ ...newHsva }, props.format, props.showAlpha)
      cacheHsva.value = { ...newHsva }
    } else {
      cacheHsva.value = null
    }
    colorValue.value = color
    const originValue = handleTransformValue()

    if (
      JSON.stringify(newHsva) !== JSON.stringify(originValue) &&
      JSON.stringify(newHsva) !== JSON.stringify(oldHsva)
    ) {
      emit('change', color)
    }
  },
  { immediate: true },
)

const h = computed(() => hsva.value?.h ?? 0)
const s = computed(() => hsva.value?.s ?? 0)
const v = computed(() => hsva.value?.v ?? 0)
const a = computed(() => hsva.value?.a ?? 1)

const rgb = computed(() => hsv2rgb(h.value, s.value, v.value))
const rgbStr = computed(
  () => `rgb(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b})`,
)

const handleInputFormat = (format: Format) =>
  props.showAlpha ? ALPHA_FORMAT_MAP[format] : FORMAT_MAP[format]

const handleColorChange = (
  color: string,
  format: Format,
  showAlpha: boolean,
) => {
  if (!color.length) return
  const hsv = transformHsva(color, format, showAlpha)
  const { h, s, v } = hsv
  if ([h, s, v].some(Number.isNaN)) return

  hsva.value = {
    h,
    s,
    v,
    a: (hsv as any).a ?? 1,
  }
}

const onSelectHue = (hue: number) => {
  selectColorIndex.value = -1
  if (unref(hsva) == null) {
    hsva.value = {
      h: hue,
      s: unref(s),
      v: unref(v),
      a: unref(a),
    }
  }
  hsva.value = {
    ...unref(hsva),
    h: hue,
  }
}
const onSelectSaturation = (saturation: any, value: any) => {
  selectColorIndex.value = -1
  if (unref(hsva) == null) {
    hsva.value = {
      h: unref(h),
      s: saturation,
      v: value,
      a: unref(a),
    }
  } else {
    hsva.value = {
      ...unref(hsva),
      s: saturation,
      v: value,
    }
  }
}
const onSelectAlpha = (alpha: any) => {
  selectColorIndex.value = -1
  if (unref(hsva) == null) {
    hsva.value = {
      h: unref(h),
      s: unref(s),
      v: unref(v),
      a: alpha,
    }
  } else {
    hsva.value = {
      ...unref(hsva),
      a: alpha,
    }
  }
}

const onSelectColor = (color: string, index: number) => {
  selectColorIndex.value = index
  const trimmedColor = color.trim()

  if (!trimmedColor) {
    hsva.value = null
    return
  }

  const format = checkColorFormat(trimmedColor)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  format ? handleColorChange(trimmedColor, format, true) : (hsva.value = null)
}

const handleChange = () => {
  const color = colorValue.value?.trim()
  if (!color) {
    hsva.value = null
    return
  }

  const format = checkColorFormat(color)
  const newHsva = filterHsva(transformHsva(color, format, props.showAlpha))

  if (checkHsva(newHsva)) {
    hsva.value = newHsva
  } else {
    colorValue.value = cacheHsva.value
      ? hsvFormat(cacheHsva.value, props.format, props.showAlpha)
      : ''
  }
}

const onInputChange = (color: string) => {
  selectColorIndex.value = -1
  colorValue.value = color
}

const onFormatChange = (format: Format) => {
  emit('formatChange', format)
}
</script>

<style scoped>
@import '../../style/Picker.css';
</style>
