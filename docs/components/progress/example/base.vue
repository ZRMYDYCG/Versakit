<template>
  <div>
    <VKProgress :percent />
    <VKProgress :percent status="success" />
    <VKProgress :percent status="error" />

    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      "
    >
      <VKProgress :percent="value" />
      <div style="display: flex; justify-content: space-around">
        <VKButton @click="value++" type="success">+</VKButton>
        <VKButton @click="value--" type="error">-</VKButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKProgress, VKButton } from '@versakit/ui'

const percent = ref(75)
const value = ref(0)
</script>

<style scoped>
.progress {
  margin: 20px;
}
</style>
