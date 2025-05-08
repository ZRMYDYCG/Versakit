<script setup lang="ts">
import { provide } from 'vue'
import type { BreadcrumbProps } from '../type/index.ts'

defineOptions({ name: 'VKBreadcrumb' })

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
  separatorIcon: '',
})

provide('breadcrumb', {
  separator: props.separator,
  separatorIcon: props.separatorIcon,
})

console.log(props)
</script>

<template>
  <div class="breadcrumb" role="navigation" aria-label="Breadcrumb">
    <slot></slot>
  </div>
</template>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1.5;
  color: #666;
}
</style>
