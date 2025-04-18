<script setup lang="ts">
import { ref } from 'vue'
import { VKInputOtp } from '@versakit/ui'

const otpValue = ref('1234')
</script>

<template>
  <VKInputOtp disabled v-model="otpValue" />
</template>
