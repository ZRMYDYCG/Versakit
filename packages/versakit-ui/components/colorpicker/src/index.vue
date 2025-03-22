<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, toRaw, unref } from 'vue'
import Picker from './picker'
import ColorItem from './ColorItem.vue'
import AddColorItem from './AddColorItem.vue'
import type { Format, ColorPickerProps } from '../type'
import usePopper from './hooks/usePopper'
import { colorFormat } from './utils'

defineOptions({ name: 'VerColorPicker' })

const props = withDefaults(defineProps<ColorPickerProps>(), {
  value: '',
  size: 20,
  //   width: ,
  //   height: ,
  format: 'rgb',
  showPicker: undefined,
  showAlpha: false,
  deleteColor: true,
  max: 13,
  popupContainer: 'body',
  zIndex: 1000,
  colors: () => [
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    '#ff4500',
    '#ff7d4d',
    '#00babd',
    '#1f93ff',
    '#fa64c3',
  ],
  position: 'absolute',
  placement: 'top',
  formatOptions: false,
})

const emit = defineEmits([
  'change',
  'update:value',
  'update:showPicker',
  'overflowMax',
  'closePicker',
  'formatChange',
])

const valueList = ref<string[]>([])
const formatValue = ref<Format>('hex')
const selectedIndex = ref<undefined | number>(undefined)
const isShowPicker = ref(false)
const targetRef = ref<HTMLElement | null>(null)
const pickerRef = ref<any>(null)
const colorPicker = ref<HTMLElement>()
const colorItemsRef = ref<HTMLElement[]>([])
let openTimer: ReturnType<typeof setTimeout> | undefined
let closeTimer: ReturnType<typeof setTimeout> | undefined
let dragTargetIndex: undefined | number

const values = computed(() =>
  valueList.value.map((value) => colorFormat(value, 'hex', props.showAlpha)),
)

const selectedColor = computed(() => valueList.value[selectedIndex.value!])

const addColorItemShow = computed(() => props.max > valueList.value.length)

const toPopupContainer = computed(() => {
  if (
    typeof props.popupContainer === 'string' ||
    (typeof props.popupContainer === 'object' && props.popupContainer != null)
  ) {
    return props.popupContainer
  }
  return 'body'
})

const teleportDisabled = computed(() => {
  if (typeof props.popupContainer === 'boolean') {
    return props.popupContainer === false
  }
  return false
})

// const theme = computed(() => props.theme)
// const changeTheme = () => {
//   nextTick(() => {
//     colorPicker.value?.setAttribute('pick-colors-theme', theme.value)
//     pickerRef.value?.$el?.setAttribute('pick-colors-theme', theme.value)
//   })
// }

const { style: pickerStyle } = usePopper(targetRef, pickerRef, {
  defaultStyle: { zIndex: props.zIndex },
  strategy: props.position,
  placement: props.placement,
})

watch(
  () => props.format,
  (newVal) => {
    formatValue.value = newVal!
  },
  { immediate: true },
)

watch(
  () => props.value,
  (newVal) => {
    const value = newVal || ''
    const values = Array.isArray(value) ? value : [value]
    valueList.value = values.map((v) =>
      colorFormat(v, formatValue.value, props.showAlpha),
    )
  },
  { immediate: true },
)

watch(isShowPicker, (newVal) => {
  if (newVal) {
    clearTimeout(closeTimer)
  }
})

// watch(
//   () => [props.theme, pickerRef.value],
//   () => {
//     changeTheme()
//   },
//   { immediate: true },
// )

const onFormatChange = (format: Format) => {
  formatValue.value = format
  emit('formatChange', format)
}

const onOpenPicker = () => {
  if (!targetRef.value) targetRef.value = colorItemsRef.value[0]
  if (selectedIndex.value === undefined) selectedIndex.value = 0
  if (props.showPicker === undefined) {
    isShowPicker.value = true
  } else {
    emit('update:showPicker', true)
  }
}

const onClosePicker = () => {
  selectedIndex.value = undefined
  if (props.showPicker === undefined) {
    isShowPicker.value = false
  } else {
    emit('update:showPicker', false)
  }
  emit(
    'closePicker',
    toRaw(
      Array.isArray(props.value) || props.addColor
        ? valueList.value
        : valueList.value[0],
    ),
  )
}

const onColorClick = async (e: Event) => {
  const target = e.target as HTMLElement
  const index = target.dataset?.index
  if (index == null) return
  const i = +index
  if (selectedIndex.value === i) return

  if (selectedIndex.value != null && selectedIndex.value !== i) {
    onClosePicker()
    openTimer = setTimeout(() => {
      onOpenPicker()
      clearTimeout(openTimer)
    }, 100)
  } else {
    onOpenPicker()
  }
  selectedIndex.value = i
  targetRef.value = target
}

const onAllClick = async (e: Event) => {
  const target = e.target as HTMLElement
  const isColorItem =
    !colorPicker.value?.isEqualNode(target) &&
    colorPicker.value?.contains(target)
  if (isColorItem) return

  const popperTarget = pickerRef.value?.$el as HTMLElement
  const isPopperContains = popperTarget?.contains(target) || false
  if (isPopperContains) return

  closeTimer = setTimeout(() => {
    if (isShowPicker.value) onClosePicker()
  }, 0)
}

const onPickerChange = (color: string) => {
  const index = selectedIndex.value
  const values = [...valueList.value]

  if (index == null) return

  if (index >= 0) {
    values[index] = color
  } else {
    selectedIndex.value = values.length
    values.push(color)
  }

  const resultValue =
    Array.isArray(props.value) || props.addColor ? values : values[0]

  valueList.value = Array.isArray(resultValue) ? resultValue : [resultValue]
  emit('update:value', resultValue)
  emit('change', resultValue, color, index)

  if (props.addColor && values.length >= props.max) {
    emit('overflowMax')
  }
}

const onColorItemDragStart = (e: DragEvent) => {
  e.dataTransfer!.effectAllowed = 'move'
  const target = e.target as HTMLElement
  dragTargetIndex = +target.dataset.index!
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onColorItemDragOver = (e: DragEvent) => {
  console.log(e, '123')
}

const colorItemSelected = (index: any) => {
  return (
    (props.addColor
      ? unref(valueList).length > 0
      : unref(valueList).length > 1) && unref(selectedIndex) === index
  )
}

const onColorItemDrop = (e: DragEvent) => {
  const target = e.target as HTMLElement
  const insertIndex = +target.dataset.index!
  const colorList = [...valueList.value]
  const targetColor = colorList[dragTargetIndex!]

  colorList.splice(dragTargetIndex!, 1)
  const newValues = [
    ...colorList.slice(0, insertIndex),
    targetColor,
    ...colorList.slice(insertIndex),
  ]

  emit('update:value', newValues)
  emit('change', newValues, targetColor, dragTargetIndex)
}

// provide('theme', { theme })

onMounted(() => {
  document.addEventListener('mouseup', onAllClick)
  if (props.showPicker) onOpenPicker()
})

onUnmounted(() => {
  document.removeEventListener('mouseup', onAllClick)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  openTimer && clearTimeout(openTimer)
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  closeTimer && clearTimeout(closeTimer)
})
</script>

<template>
  <div
    class="ver-color-picker"
    ref="colorPicker"
    @dragstart.stop="onColorItemDragStart"
    @dragover.prevent.stop="onColorItemDragOver"
    @drop.prevent.stop="onColorItemDrop"
    @click.stop="onColorClick"
  >
    <color-item
      class="ver-color-picker-color-item"
      v-for="(value, index) in values"
      :key="index"
      :ref="(el: any) => (colorItemsRef[index] = el)"
      :size="size"
      :width="width"
      :height="height"
      :value="value"
      :selected="colorItemSelected(index)"
      :data-index="index"
      :draggable="valueList.length > 1"
      :format="formatValue"
    />
    <add-color-item
      class="ver-color-picker-add-color-item"
      v-if="addColor && addColorItemShow"
      ref="addColorItem"
      :selected="colorItemSelected(-1)"
      :data-index="-1"
    />
    <teleport :to="toPopupContainer" :disabled="teleportDisabled">
      <transition>
        <picker
          class="ver-color-picker-picker"
          :style="pickerStyle"
          ref="pickerRef"
          :value="selectedColor"
          :format="formatValue"
          :show-alpha="showAlpha"
          :colors="props.colors"
          :formatOptions="props.formatOptions"
          v-if="isShowPicker"
          @change="onPickerChange"
          @formatChange="onFormatChange"
        />
      </transition>
    </teleport>
  </div>
</template>

<style scoped>
@import '../style/index.css';
</style>
