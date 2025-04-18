<template>
  <div>
    <VKButton @click="drawerLeft = true">Left</VKButton>
    <VKButton @click="drawerTop = true">Top</VKButton>
    <VKButton @click="drawerRight = true">Right</VKButton>
    <VKButton @click="drawerBottom = true">Bottom</VKButton>

    <VKDrawer v-model="drawerLeft" closeIcon="ep:close">
      <span>左边</span>
    </VKDrawer>

    <VKDrawer direction="top" v-model="drawerTop" closeIcon="ep:close">
      <span>上面</span>
    </VKDrawer>

    <VKDrawer direction="right" v-model="drawerRight" closeIcon="ep:close">
      <span>上面</span>
    </VKDrawer>

    <VKDrawer direction="bottom" v-model="drawerBottom" closeIcon="ep:close">
      <span>上面</span>
    </VKDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKDrawer, VKButton } from '@versakit/ui'

const drawerLeft = ref(false)
const drawerTop = ref(false)
const drawerRight = ref(false)
const drawerBottom = ref(false)
</script>
