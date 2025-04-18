<template>
  <VKBadge type="number" :value="value1">
    <VKButton @click="countUp()">点我增加</VKButton>
  </VKBadge>
</template>

<script setup>
import { VKBadge, VKButton } from '@versakit/ui'
import { ref } from 'vue'

const value1 = ref(95)

const countUp = () => {
  value1.value++
}
</script>
