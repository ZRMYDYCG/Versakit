<script setup lang="ts">
import { ref } from 'vue'
import { VerInputOtp } from '@versakit/ui'

const otpValue = ref('1234')
</script>

<template>
  <VerInputOtp disabled v-model="otpValue" />
</template>
