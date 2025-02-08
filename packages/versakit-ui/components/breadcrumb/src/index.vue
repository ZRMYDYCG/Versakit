<script setup lang="ts">
import { provide } from 'vue'
import type { BreadcrumbProps } from '../type/index.ts'

defineOptions({ name: 'VerBreadcrumb' })

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  separator: '/',
  separatorClass: '',
})

provide('breadcrumb', {
  separator: props.separator,
  separatorClass: props.separatorClass,
})
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
