<script setup lang="ts">
defineOptions({
  name: 'DropdownMenuItem',
})

const props = defineProps<{
  disabled?: boolean
}>()

const emit = defineEmits<{
  (e: 'select'): void
}>()

const handleSelect = () => {
  if (!props.disabled) {
    emit('select')
  }
}
</script>

<template>
  <button
    class="dropdown-item"
    :class="{ disabled: disabled }"
    role="menuitem"
    @click="handleSelect"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
@import url('../style/item.css');
</style>
