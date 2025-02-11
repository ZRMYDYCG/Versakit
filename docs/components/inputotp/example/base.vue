<script setup lang="ts">
import { ref } from 'vue'
import { VerInputOtp } from '@versakit/ui'

const otpValue = ref('')
</script>

<template>
  <VerInputOtp v-model="otpValue" />
</template>

<style></style>
