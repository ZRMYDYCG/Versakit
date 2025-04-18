<script setup lang="ts">
import { ref } from 'vue'
import { VKPanel } from '@versakit/ui'

const inputValue = ref('')
const throttledValue = ref('')
const immediateValue = ref('')
const immediateThrottledValue = ref('')

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  throttledValue.value = target.value
}

const handleImmediateInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  immediateThrottledValue.value = target.value
}
</script>

<template>
  <div class="throttle-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <VKPanel>
        <input
          v-model="inputValue"
          v-throttle="{ delay: 500 }"
          @input="handleInput"
          placeholder="输入内容，每500ms最多执行一次"
        />
        <div class="result">
          <p>输入值: {{ inputValue }}</p>
          <p>节流值: {{ throttledValue }}</p>
        </div>
      </VKPanel>
    </div>

    <h3>立即执行</h3>
    <div class="demo-row">
      <VKPanel>
        <input
          v-model="immediateValue"
          v-throttle="{ delay: 500, immediate: true }"
          @input="handleImmediateInput"
          placeholder="输入内容，立即执行一次，之后每500ms最多执行一次"
        />
        <div class="result">
          <p>输入值: {{ immediateValue }}</p>
          <p>节流值: {{ immediateThrottledValue }}</p>
        </div>
      </VKPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.throttle-demo {
  padding: 20px;

  h3 {
    margin: 20px 0;
    color: #333;
  }
}

.demo-row {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin-bottom: 10px;
}

.result {
  margin-top: 10px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 4px;

  p {
    margin: 5px 0;
    color: #666;
  }
}
</style>
