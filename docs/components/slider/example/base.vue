<script setup lang="ts">
import { VKSlider } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(0)
const value2 = ref(20)
const value3 = ref(50)

const handleChange = (val: number) => {
  console.log('Changed:', val)
}
</script>

<template>
  <div>
    <VKSlider v-model="value" />

    <VKSlider
      v-model="value2"
      :min="0"
      :max="200"
      :step="5"
      @change="handleChange"
    />

    <VKSlider v-model="value3" disabled @change="handleChange" />
  </div>
</template>
