<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount } from 'vue'
import type { TabItemProps } from '../type/index.ts'

defineOptions({ name: 'VKTabItem' }) // 修改组件名称为 VKTabItem

const props = withDefaults(defineProps<TabItemProps>(), {
  disabled: false,
})

const tabs = inject('tabs') as any

onMounted(() => {
  tabs.registerTab({
    label: props.label,
    name: props.name,
    disabled: props.disabled,
  })
})

onBeforeUnmount(() => {
  tabs.unregisterTab(props.name)
})
</script>

<template>
  <div
    v-show="tabs.activeTab === props.name"
    class="tab-pane"
    role="tabpanel"
    :aria-hidden="tabs.activeTab !== props.name ? 'true' : 'false'"
    :aria-labelledby="`tab-${props.name}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-pane {
  width: 100%;
}
</style>
