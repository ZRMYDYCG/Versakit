<script setup lang="ts">
import { inject, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  label: string
  name: string | number
}>()

const { activeTab, registerTab, unregisterTab } = inject('tabs') as any

onMounted(() => {
  registerTab(props)
})

onUnmounted(() => {
  unregisterTab(props.name)
})
</script>

<template>
  <div
    v-show="activeTab === name"
    class="tabs-pane"
    role="tabpanel"
    :aria-labelledby="`tab-${name}`"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.tabs-pane {
  padding: 16px;
}
</style>
