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
    plain: true,
    content: 'content',
    icon: 'ep:info-filled',
  })
}

const success = () => {
  VKNotification({
    title: 'title',
    type: 'success',
    plain: true,
    icon: 'ep:success-filled',
    content: 'content',
  })
}

const warning = () => {
  VKNotification({
    title: 'title',
    type: 'warn',
    plain: true,
    icon: 'ep:warning-filled',
    content: 'content',
  })
}

const error = () => {
  VKNotification({
    title: 'title',
    type: 'error',
    plain: true,
    icon: 'ep:circle-close-filled',
    content: 'content',
  })
}
</script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
