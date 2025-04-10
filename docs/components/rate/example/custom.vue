<script setup>
import { VKRate } from '@versakit/ui'
import { ref } from 'vue'

const customRate = ref(2)
</script>

<template>
  <VKRate
    v-model="customRate"
    character="♥"
    :colors="['#ff4d4f', '#ff7875', '#ff9c6e']"
  />
</template>
