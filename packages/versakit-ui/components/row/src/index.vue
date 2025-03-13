<template>
  <div class="ver-row" ref="row">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import type { LayoutProps } from '../type'

defineOptions({ name: 'VerRow' })

const props = withDefaults(defineProps<LayoutProps>(), {
  gutter: 0,
})

const row = ref<HTMLElement>()

const setPaddings = (isZero: boolean) => {
  const children = row.value?.children
  if (!children || isZero) return
  const _padding = props.gutter / 2
  children.forEach((child: HTMLElement) => {
    child.style.paddingLeft = `${_padding}px`
    child.style.paddingRight = `${_padding}px`
  })
}

watch(
  () => props.gutter,
  () => setPaddings(false),
)

onMounted(() => setPaddings(props.gutter === 0))
</script>

<style>
@import '../style/index.css';
</style>
