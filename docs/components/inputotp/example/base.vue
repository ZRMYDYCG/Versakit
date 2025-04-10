<script setup lang="ts">
import { ref } from 'vue'
import { VKInputOtp } from '@versakit/ui'

const otpValue = ref('')
</script>

<template>
  <VKInputOtp v-model="otpValue" />
</template>

<style></style>
