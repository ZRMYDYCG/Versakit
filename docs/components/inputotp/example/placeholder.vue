<script setup lang="ts">
import { ref } from 'vue'
import { VerInputOtp } from '@versakit/ui'

const otpValue = ref('')
</script>

<template>
  <VerInputOtp placeholder="*" v-model="otpValue" />
</template>

<style></style>
