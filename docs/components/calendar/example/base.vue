<script lang="ts" setup>
import { VKCalendar } from '@versakit/ui'
import { ref } from 'vue'

const value = ref(new Date())
</script>

<template>
  <VKCalendar v-model="value" />
</template>
