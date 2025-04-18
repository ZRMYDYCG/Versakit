<script setup lang="ts">
import { ref } from 'vue'
import { VKDataPicker } from '@versakit/ui'

const selectedDate = ref<Date | null>(null)
</script>

<template>
  <div class="container">
    <div class="example-box">
      <VKDataPicker v-model="selectedDate" placeholder="选择日期" />
      <div>Selected date: {{ selectedDate }}</div>
    </div>
  </div>
</template>

<style scoped>
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
