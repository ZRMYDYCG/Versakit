<template>
  <div>
    <VKButton @click="openMessage">点击</VKButton>
  </div>
</template>

<script setup lang="ts">
import { VKButton, VKMessage } from '@versakit/ui'

const openMessage = () => {
  VKMessage({
    type: 'info',
    content: '这是一条消息',
    duration: 2000,
    icon: 'ep:info-filled',
  })
}
</script>
