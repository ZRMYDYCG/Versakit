<script setup lang="ts">
import { provide, computed } from 'vue'

const props = defineProps<{
  steps: Array<{ title: string; description?: string }>
  currentStep: number
}>()

const emit = defineEmits<{
  (e: 'update:currentStep', step: number): void
}>()

const activeStep = computed({
  get: () => props.currentStep,
  set: (value) => emit('update:currentStep', value),
})

provide('stepsContext', {
  steps: props.steps,
  activeStep,
})
</script>

<template>
  <div class="steps-container">
    <slot />
  </div>
</template>

<style scoped>
.steps-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
</style>
