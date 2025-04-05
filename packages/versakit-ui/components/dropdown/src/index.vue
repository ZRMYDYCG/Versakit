<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'

defineOptions({
  name: 'VerDropdownMenu',
})

const props = defineProps<{
  placement?:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left'
}>()

defineEmits<{
  (e: 'select', value: any): void
}>()

const dropdownRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

// Handle click outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false
})

// Toggle dropdown
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Handle keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

// Calculate dropdown position class
const dropdownPositionClass = computed(() => {
  return props.placement || 'bottom'
})
</script>

<template>
  <div
    ref="dropdownRef"
    class="dropdown-container"
    :class="{ 'is-open': isOpen }"
  >
    <!-- Trigger button -->
    <button
      @click="toggleDropdown"
      class="dropdown-trigger"
      aria-haspopup="true"
      :aria-expanded="isOpen"
    >
      <slot name="trigger"></slot>
    </button>

    <!-- Dropdown content -->
    <div
      v-show="isOpen"
      class="dropdown-content"
      :class="[dropdownPositionClass]"
      role="menu"
      tabindex="-1"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import url('../style/index.css');
</style>
