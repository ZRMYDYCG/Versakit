<template>
  <VKRow class="mb-4">
    <VKCol :span="10"><div class="col-box col-box-1"></div></VKCol>
    <VKCol :span="14">
      <div class="col-box col-box-2"></div>
    </VKCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="6"><div class="col-box col-box-1"></div></VKCol>
    <VKCol :span="8"><div class="col-box col-box-2"></div></VKCol>
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>
  </VKRow>
  <VKRow class="mb-4">
    <VKCol :span="4"><div class="col-box col-box-1"></div></VKCol>
    <VKCol :span="16"><div class="col-box col-box-2"></div></VKCol>
    <VKCol :span="4"><div class="col-box col-box-1"></div></VKCol>
  </VKRow>
</template>

<script setup lang="ts">
import { VKRow, VKCol } from '@versakit/ui'
</script>

<style scoped>
.col-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
