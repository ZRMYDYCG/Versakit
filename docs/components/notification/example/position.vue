<template>
  <div>
    <VerButton @click="topleft">top-left</VerButton>
    <VerButton @click="topright">top-right</VerButton>
    <VerButton @click="bottomleft">bottom-left</VerButton>
    <VerButton @click="bottomright">bottom-right</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from '@versakit/ui'

const topleft = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'top-left',
    icon: 'ep:info-filled',
  })
}

const topright = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    icon: 'ep:info-filled',
  })
}

const bottomleft = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'bottom-left',
    icon: 'ep:info-filled',
  })
}

const bottomright = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'bottom-right',
    icon: 'ep:info-filled',
  })
}
</script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
