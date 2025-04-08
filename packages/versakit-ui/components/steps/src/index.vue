<script setup lang="ts">
import { provide, computed } from 'vue'

export type Step = {
  title: string
  description?: string
  icon?: string
  status?: 'wait' | 'process' | 'finish' | 'error'
}

export type StepsContext = {
  steps: Step[]
  activeStep: number | any
  direction: 'horizontal' | 'vertical'
  size: 'default' | 'small' | 'large'
  labelPlacement: 'horizontal' | 'vertical'
}

const props = withDefaults(
  defineProps<{
    steps: Step[]
    currentStep: number
    direction?: 'horizontal' | 'vertical'
    size?: 'default' | 'small' | 'large'
    labelPlacement?: 'horizontal' | 'vertical'
  }>(),
  {
    direction: 'horizontal',
    size: 'default',
    labelPlacement: 'horizontal',
  },
)

const emit = defineEmits<{
  (e: 'update:currentStep', step: number): void
  (e: 'change', current: number, prev: number): void
}>()

const activeStep = computed({
  get: () => props.currentStep,
  set: (value) => {
    const prevValue = props.currentStep
    emit('update:currentStep', value)
    emit('change', value, prevValue)
  },
})

provide('stepsContext', {
  steps: props.steps,
  activeStep,
  direction: props.direction,
  size: props.size,
  labelPlacement: props.labelPlacement,
})
</script>

<template>
  <div
    class="ver-steps-container"
    :class="[
      `ver-steps--${direction}`,
      `ver-steps--${size}`,
      `ver-steps--label-${labelPlacement}`,
    ]"
  >
    <slot />
  </div>
</template>

<style scoped>
.ver-steps-container {
  display: flex;
  width: 100%;
  padding: 0;
}

.ver-steps--horizontal {
  flex-direction: row;
  align-items: flex-start;
}

.ver-steps--vertical {
  flex-direction: column;
  gap: 16px;
}

.ver-steps--default {
  font-size: 14px;
}

.ver-steps--small {
  font-size: 12px;
}

.ver-steps--large {
  font-size: 16px;
}

.ver-steps--label-horizontal {
  --label-direction: row;
}

.ver-steps--label-vertical {
  --label-direction: column;
}
</style>
