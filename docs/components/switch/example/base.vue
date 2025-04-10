<template>
  <VKSwitch v-model="value" />
</template>

<script lang="ts" setup>
import { VKSwitch } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(false)
</script>
