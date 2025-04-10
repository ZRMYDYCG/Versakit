<script setup lang="ts">
import { ref } from 'vue'
import { VKInputOtp } from '@versakit/ui'

const otpValue = ref('')
</script>

<template>
  <VKInputOtp :length="4" v-model="otpValue" />
</template>

<style></style>
