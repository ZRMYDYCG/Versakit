<script setup lang="ts">
import { inject, computed } from 'vue'

interface Step {
  title: string
  description?: string
}

interface StepsContext {
  steps: Step[]
  activeStep: number | any
}

const { steps, activeStep } = inject<StepsContext>('stepsContext')!

const props = defineProps<{ index: number }>()

const isActive = computed(() => props.index === activeStep.value)
const isCompleted = computed(() => props.index < activeStep.value)
</script>

<template>
  <div class="step-item" :class="{ active: isActive, completed: isCompleted }">
    <div class="step-indicator">
      <div class="step-number">{{ index + 1 }}</div>
      <div class="step-line" v-if="index < steps.length - 1"></div>
    </div>
    <div class="step-content">
      <h3 class="step-title">{{ steps[index].title }}</h3>
      <p v-if="steps[index].description" class="step-description">
        {{ steps[index].description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.step-item {
  display: flex;
  gap: 1rem;
  position: relative;
  padding: 1rem 0;
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-number {
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
}

.step-line {
  width: 2px;
  height: 40px;
  background: #e0e0e0;
  margin: 8px 0;
}

.step-content {
  flex: 1;
  text-align: center;
  padding-top: 4px;
}

.active .step-number {
  background: #42b983;
}

.completed .step-number {
  background: #42b983;
}

.step-title {
  margin: 0;
  font-size: 1.1em;
}

.step-description {
  margin: 0.5rem 0 0;
  color: #666;
  font-size: 0.9em;
}
</style>
