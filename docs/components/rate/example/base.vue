<script setup>
import { VKRate } from '@versakit/ui'
import { ref } from 'vue'

const basicRate = ref(3)
</script>

<template>
  <VKRate v-model="basicRate" />
</template>
