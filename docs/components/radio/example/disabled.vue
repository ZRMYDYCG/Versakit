<template>
  <div>
    <VKRadio disabled label="1" v-model="gender">男</VKRadio>
    <VKRadio disabled label="0" v-model="gender">女</VKRadio>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKRadio } from '@versakit/ui'

const gender = ref(1)
</script>
