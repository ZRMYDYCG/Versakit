<script setup lang="ts">
import { ref, inject, onMounted, onBeforeUnmount } from 'vue'
import type { TabItemProps } from '../type/index.ts'

defineOptions({ name: 'VerTabItem' })

const props = withDefaults(defineProps<TabItemProps>(), {
  disabled: false,
})

const tabs = inject('tabs') as any
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isActive = ref(false)

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
  <div v-show="tabs.activeTab === name" class="tab-pane">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab-pane {
  width: 100%;
}
</style>
