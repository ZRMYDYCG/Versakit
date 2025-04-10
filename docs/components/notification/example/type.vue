<template>
  <div>
    <VKButton type="info" @click="info">info</VKButton>
    <VKButton type="success" @click="success">success</VKButton>
    <VKButton type="warn" @click="warning">warning</VKButton>
    <VKButton type="error" @click="error">error</VKButton>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKNotification } from '@versakit/ui'

const info = () => {
  VKNotification({
    title: 'title',
    type: 'info',
    content: 'content',
    icon: 'ep:info-filled',
  })
}

const success = () => {
  VKNotification({
    title: 'title',
    type: 'success',
    content: 'content',
    icon: 'ep:success-filled',
  })
}

const warning = () => {
  VKNotification({
    title: 'title',
    type: 'warn',
    content: 'content',
    icon: 'ep:warning-filled',
  })
}

const error = () => {
  VKNotification({
    title: 'title',
    type: 'error',
    content: 'content',
    icon: 'ep:circle-close-filled',
  })
}
</script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
