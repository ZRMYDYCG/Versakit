<template>
  <VKBadge>
    <VKButton type="primary">点我没啥</VKButton>
  </VKBadge>
  <VKBadge type="text" value="new">
    <VKButton>点我没事</VKButton>
  </VKBadge>
</template>

<script setup>
import { VKBadge, VKButton } from '@versakit/ui'
</script>

<style scoped lang="scss">
.ver-badge {
  margin-right: 20px;
}
</style>
