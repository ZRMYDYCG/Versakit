<template>
  <div>
    <VKButton @click="openNotification">openNotification</VKButton>
  </div>
</template>

<script lang="ts" setup>
import { VKButton, VKNotification } from '@versakit/ui'

const openNotification = () => {
  VKNotification({
    title: 'title',
    content: 'content',
    icon: 'ep:info-filled',
  })
}
</script>
