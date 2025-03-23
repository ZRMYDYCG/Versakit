<script setup lang="ts">
import { VerButton, VerRow } from '@versakit/ui'
</script>

<template>
  <ver-row>
    <VerButton color="pink" circle icon="ep:apple" />
    <VerButton color="green" circle icon="ep:chrome-filled" />
    <VerButton circle icon="ep:cold-drink" />
  </ver-row>
</template>
<style scoped>
.ver-btn {
  margin: 0.5rem;
}
</style>
