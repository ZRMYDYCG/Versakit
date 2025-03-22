<script setup lang="ts">
import { ref } from 'vue'
import { VerStepItem, VerSteps } from '@versakit/ui'

const currentStep = ref(0)
const steps = [
  { title: '订单确认', description: '确认订单详情' },
  { title: '支付处理', description: '完成支付流程' },
  { title: '订单完成', description: '等待商品送达' },
]
</script>

<template>
  <div class="container">
    <!-- Vertical Example -->
    <div class="example-box">
      <VerSteps :steps="steps" :current="currentStep" direction="vertical">
        <VerStepItem
          v-for="(_, index) in steps"
          :key="`v-${index}`"
          :index="index"
        />
      </VerSteps>
    </div>

    <!-- Horizontal Example -->
    <div class="example-box">
      <VerSteps :steps="steps" :current="currentStep" direction="horizontal">
        <VerStepItem
          v-for="(_, index) in steps"
          :key="`h-${index}`"
          :index="index"
        />
      </VerSteps>
    </div>

    <div class="controls">
      <button @click="currentStep--" :disabled="currentStep === 0">
        上一步
      </button>
      <button
        @click="currentStep++"
        :disabled="currentStep === steps.length - 1"
      >
        下一步
      </button>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
}

.example-box {
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
}

.controls {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
}

button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
