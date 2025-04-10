<template>
  <div>
    <VKButton @click="drawerLeft = true">基本使用</VKButton>

    <VKDrawer v-model="drawerLeft" closeIcon="ep:close">
      <span>左边</span>
    </VKDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VKDrawer, VKButton } from '@versakit/ui'

const drawerLeft = ref(false)
</script>
