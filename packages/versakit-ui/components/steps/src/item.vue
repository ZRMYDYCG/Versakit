<script setup lang="ts">
import { inject, computed } from 'vue'
import type { StepsContext } from './index.vue'

const { steps, activeStep, labelPlacement, direction } =
  inject<StepsContext>('stepsContext')!

const props = withDefaults(
  defineProps<{
    index: number
    clickable?: boolean
    customIcon?: string
  }>(),
  {
    clickable: false,
  },
)

const isActive = computed(() => props.index === activeStep.value)
const isCompleted = computed(() => props.index < activeStep.value)
const step = computed(() => steps[props.index])
const status = computed(() => {
  if (step.value.status) return step.value.status
  if (isActive.value) return 'process'
  if (isCompleted.value) return 'finish'
  return 'wait'
})

const isHorizontal = computed(() => direction === 'horizontal')
const isVertical = computed(() => direction === 'vertical')

const handleClick = () => {
  if (props.clickable) {
    activeStep.value = props.index
  }
}

const getIconContent = () => {
  if (props.customIcon) return props.customIcon
  if (step.value.icon) return step.value.icon
  if (status.value === 'finish') return '✓'
  if (status.value === 'error') return '✗'
  return props.index + 1
}
</script>

<template>
  <div
    class="ver-step-item"
    :class="[
      `ver-step--${status}`,
      { 'ver-step--clickable': clickable },
      { 'ver-step--horizontal': isHorizontal },
      { 'ver-step--vertical': isVertical },
    ]"
    @click="handleClick"
  >
    <div class="ver-step-indicator">
      <div class="ver-step-number">
        <slot name="icon" :status="status" :index="index">
          {{ getIconContent() }}
        </slot>
      </div>
      <div
        class="ver-step-line"
        v-if="index < steps.length - 1"
        :class="{ active: isCompleted }"
      ></div>
    </div>
    <div
      class="ver-step-content"
      :class="{ 'ver-step-content--vertical': labelPlacement === 'vertical' }"
    >
      <slot name="title" :title="step.title">
        <h3 class="ver-step-title">{{ step.title }}</h3>
      </slot>
      <slot name="description" :description="step.description">
        <p v-if="step.description" class="ver-step-description">
          {{ step.description }}
        </p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.ver-step-item {
  display: flex;
  position: relative;
  flex: 1;
}

.ver-step--horizontal {
  flex-direction: column;
  align-items: center;
}

.ver-step--vertical {
  flex-direction: row;
}

.ver-step-indicator {
  display: flex;
  position: relative;
  z-index: 1;
}

.ver-step--horizontal .ver-step-indicator {
  flex-direction: column;
  align-items: center;
}

.ver-step--vertical .ver-step-indicator {
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
}

.ver-step-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  z-index: 2;
  transition: all 0.3s ease;
}

.ver-step-line {
  position: absolute;
  background: #e0e0e0;
  transition: background-color 0.3s ease;
}

.ver-step--horizontal .ver-step-line {
  height: 2px;
  width: calc(200%);
  top: 16px;
  left: calc(50%);
  z-index: 0;
}

.ver-step--vertical .ver-step-line {
  width: 2px;
  height: calc(100% - 32px);
  top: 32px;
  left: 16px;
}

.ver-step-line.active {
  background-color: #42b983;
}

.ver-step-content {
  flex: 1;
  padding: 0 16px;
  display: flex;
  gap: 4px;
}

.ver-step--horizontal .ver-step-content {
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 8px;
}

.ver-step--vertical .ver-step-content {
  flex-direction: column;
  padding-left: 0;
}

.ver-step-content--vertical {
  flex-direction: column !important;
}

.ver-step--process .ver-step-number {
  background: #42b983;
  box-shadow: 0 0 0 4px rgba(66, 185, 131, 0.2);
}

.ver-step--finish .ver-step-number {
  background: #42b983;
}

.ver-step--error .ver-step-number {
  background: #f44336;
}

.ver-step--clickable {
  cursor: pointer;
}

.ver-step--clickable:hover .ver-step-number {
  transform: scale(1.05);
}

.ver-step-title {
  margin: 0;
  font-size: 1.1em;
  font-weight: 500;
  transition: color 0.3s ease;
}

.ver-step--process .ver-step-title {
  color: #42b983;
}

.ver-step-description {
  margin: 0;
  color: #666;
  font-size: 0.9em;
}
</style>
