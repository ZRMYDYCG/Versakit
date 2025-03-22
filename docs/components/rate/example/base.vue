<script setup>
import { VerRate } from '@versakit/ui'
import { ref } from 'vue'

const basicRate = ref(3)
</script>

<template>
  <VerRate v-model="basicRate" />
</template>
