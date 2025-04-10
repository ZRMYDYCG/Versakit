<script setup lang="ts">
import { VKRow, VKText } from '@versakit/ui'
</script>

<template>
  <VKRow>
    <VKText class="mx4">Default</VKText>
    <VKText class="mx4" type="primary">Primary</VKText>
    <VKText class="mx4" type="success">Success</VKText>
    <VKText class="mx4" type="info">Info</VKText>
    <VKText class="mx4" type="warn">Warning</VKText>
    <VKText class="mx4" type="error">Drange</VKText>
  </VKRow>
</template>

<style scoped>
.mx4 {
  margin: 0px 10px;
}
</style>
