<template>
  <div>
    <VKButton @click="dialogVisible = true">点击打开对话框</VKButton>

    <VKDialog v-model="dialogVisible" closeIcon="ep:close">
      <span>这是一段信息</span>
      <template #footer>
        <VKButton>取消</VKButton>
        <VKButton type="primary" @click="dialogVisible = false">确定</VKButton>
      </template>
    </VKDialog>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKDialog } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style scoped>
.ver-dialog_footer .ver-btn {
  margin-right: 20px;
}
</style>
