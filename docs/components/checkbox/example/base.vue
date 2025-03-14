<script setup lang="ts">
import { VerCheckbox } from '@versakit/ui'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div>
    <VerCheckbox v-model="checked" />
  </div>
</template>

<style lang="scss" scoped></style>
