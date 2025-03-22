<template>
  <div class="ver-color-picker-colors">
    <template v-for="(color, index) in useColors" :key="index">
      <color-item
        class="ver-color-picker-color-item"
        :size="16"
        :value="color"
        :border="false"
        :border-radius="3"
        :selected="selectedIndex === index"
        @click.stop.prevent="onSelectColor(color, +index)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { colorFormat } from '../utils'
import ColorItem from '../ColorItem.vue'

import type { ColorProps } from '../../type'

const props = withDefaults(defineProps<ColorProps>(), {
  colors: () => [],
  selectedIndex: -1,
})

const emit = defineEmits(['change'])

const useColors = computed(() =>
  props.colors.map((color) => colorFormat(color, 'hex', true)),
)

const onSelectColor = (color: string, index: number) => {
  emit('change', color, index)
}
</script>

<style scoped>
@import '../../style/Colors.css';
</style>
