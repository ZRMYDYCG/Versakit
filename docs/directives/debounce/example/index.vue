<script setup lang="ts">
import { ref } from 'vue'
import { VKPanel } from '@versakit/ui'

const inputValue = ref('')
const debouncedValue = ref('')
const immediateValue = ref('')
const immediateDebouncedValue = ref('')

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  debouncedValue.value = target.value
}

const handleImmediateInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  immediateDebouncedValue.value = target.value
}
</script>

<template>
  <div class="debounce-demo">
    <h3>基本用法</h3>
    <div class="demo-row">
      <VKPanel>
        <input
          v-model="inputValue"
          v-debounce="{ delay: 500 }"
          @input="handleInput"
          placeholder="输入内容，500ms后更新"
        />
        <div class="result">
          <p>输入值: {{ inputValue }}</p>
          <p>防抖值: {{ debouncedValue }}</p>
        </div>
      </VKPanel>
    </div>

    <h3>立即执行</h3>
    <div class="demo-row">
      <VKPanel>
        <input
          v-model="immediateValue"
          v-debounce="{ delay: 500, immediate: true }"
          @input="handleImmediateInput"
          placeholder="输入内容，立即执行一次，之后500ms更新"
        />
        <div class="result">
          <p>输入值: {{ immediateValue }}</p>
          <p>防抖值: {{ immediateDebouncedValue }}</p>
        </div>
      </VKPanel>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.debounce-demo {
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
