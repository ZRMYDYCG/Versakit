<script setup lang="ts">
import { inject } from 'vue'
import type { BreadcrumbItemProps } from '../type/index.ts'

defineOptions({ name: 'VKBreadcrumbItem' })

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
  <span class="vk-breadcrumb-item">
    <span
      v-if="to"
      class="vk-breadcrumb-item-link"
      role="link"
      tabindex="0"
      aria-current="false"
      @click="handleClick"
      @keydown.enter="handleClick"
    >
      <slot></slot>
    </span>
    <span v-else class="vk-breadcrumb-item-text" aria-current="true">
      <slot></slot>
    </span>
    <span class="vk-breadcrumb-item-separator" aria-hidden="true">
      <i
        v-if="breadcrumb.separatorClass"
        :class="breadcrumb.separatorClass"
      ></i>
      <span v-else>{{ breadcrumb.separator }}</span>
    </span>
  </span>
</template>

<style scoped>
.vk-breadcrumb-item {
  display: flex;
  align-items: center;
}

.vk-breadcrumb-item:last-child .vk-breadcrumb-item-separator {
  display: none;
}

.vk-breadcrumb-item-link {
  color: #1890ff;
  cursor: pointer;
  transition: color 0.2s;
  outline: none;
}

.vk-breadcrumb-item-link:hover,
.vk-breadcrumb-item-link:focus {
  color: #40a9ff;
}

.vk-breadcrumb-item-text {
  color: #666;
}

.vk-breadcrumb-item-separator {
  margin: 0 8px;
  color: #999;
}
</style>
