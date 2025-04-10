<template>
  <VKRow :gutter="20">
    <VKCol :span="6" v-for="n in 4" :key="n">
      <div class="col-box"></div>
    </VKCol>
  </VKRow>
</template>

<script setup lang="ts">
import { VKRow, VKCol } from '@versakit/ui'
</script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}
</style>
