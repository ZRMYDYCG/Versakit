<template>
  <VKRow>
    <VKButton @click="dialogVisible = true">点击打开对话框</VKButton>

    <VKDialog v-model="dialogVisible" closeIcon="ep:close">
      <template #title>
        <div class="title">
          <h4>This is a custom header!</h4>
        </div>
      </template>
    </VKDialog>
  </VKRow>
</template>

<script lang="ts" setup>
import { VKRow, VKButton, VKDialog } from '@versakit/ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
