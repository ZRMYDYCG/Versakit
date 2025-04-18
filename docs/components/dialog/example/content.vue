<template>
  <VKRow>
    <VKButton @click="dialogVisible = true">点击打开对话框</VKButton>
    <VKButton @click="dialogFromVisible = true">点击打开对话框</VKButton>
    <!-- 普通 -->
    <VKDialog v-model="dialogVisible" title="测试">
      <p>这是一个信息</p>
    </VKDialog>
    <!-- 表单 -->
    <VKDialog v-model="dialogFromVisible" title="表单" closeIcon="ep:close">
      <div>
        <VKInput />
      </div>
      <template #footer>
        <VKButton>取消</VKButton>
        <VKButton type="primary" @click="dialogFromVisible = false">
          确定
        </VKButton>
      </template>
    </VKDialog>
  </VKRow>
</template>

<script lang="ts" setup>
import { VKRow, VKButton, VKDialog, VKInput } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
const dialogFromVisible = ref(false)
</script>

<style scoped>
.t-dialog_footer .t-btn {
  margin-right: 20px;
}

.t-btn + .t-btn {
  margin: 0px 10px;
}
</style>
