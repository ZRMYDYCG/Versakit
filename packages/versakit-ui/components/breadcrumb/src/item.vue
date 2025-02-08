<script setup lang="ts">
import { inject } from 'vue'
import type { BreadcrumbItemProps } from '../type/index.ts'

defineOptions({ name: 'VerBreadcrumbItem' })

const props = withDefaults(defineProps<BreadcrumbItemProps>(), {
  replace: false,
})

const breadcrumb = inject('breadcrumb') as {
  separator: string
  separatorClass: string
}

const handleClick = () => {
  if (!props.to || !props.to.startsWith('/')) return

  if (props.replace) {
    window.location.replace(props.to)
  } else {
    window.location.href = props.to
  }
}
</script>

<template>
  <span class="breadcrumb-item">
    <span
      v-if="to"
      class="breadcrumb-item-link"
      role="link"
      @click="handleClick"
    >
      <slot></slot>
    </span>
    <span v-else class="breadcrumb-item-text">
      <slot></slot>
    </span>
    <span class="breadcrumb-item-separator">
      <i
        v-if="breadcrumb.separatorClass"
        :class="breadcrumb.separatorClass"
      ></i>
      <span v-else>{{ breadcrumb.separator }}</span>
    </span>
  </span>
</template>

<style scoped>
.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item:last-child .breadcrumb-item-separator {
  display: none;
}

.breadcrumb-item-link {
  color: #1890ff;
  cursor: pointer;
  transition: color 0.2s;
}

.breadcrumb-item-link:hover {
  color: #40a9ff;
}

.breadcrumb-item-text {
  color: #666;
}

.breadcrumb-item-separator {
  margin: 0 8px;
  color: #999;
}
</style>
