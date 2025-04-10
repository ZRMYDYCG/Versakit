<template>
  <div>
    <VKProgress :animation="true" :percent />

    <div>
      <VKProgress :animation="true" type="circle" :percent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKProgress } from '@versakit/ui'

const percent = ref(0)

setInterval(() => {
  percent.value = percent.value >= 100 ? 0 : percent.value + 10
}, 1000)
</script>
