<template>
  <div class="my">
    <VKTag>Tag 1</VKTag>
    <VKTag type="success">Tag 2</VKTag>
    <VKTag type="info">Tag 3</VKTag>
    <VKTag type="warn">Tag 4</VKTag>
    <VKTag type="error">Tag 5</VKTag>
  </div>

  <div class="my">
    <VKTag plain>Tag 1</VKTag>
    <VKTag plain type="success">Tag 2</VKTag>
    <VKTag plain type="info">Tag 3</VKTag>
    <VKTag plain type="warn">Tag 4</VKTag>
    <VKTag plain type="error">Tag 5</VKTag>
  </div>

  <div class="my">
    <VKTag round>Tag 1</VKTag>
    <VKTag round type="success">Tag 2</VKTag>
    <VKTag round type="info">Tag 3</VKTag>
    <VKTag round type="warn">Tag 4</VKTag>
    <VKTag round type="error">Tag 5</VKTag>
  </div>
</template>

<script lang="ts" setup>
import { VKTag } from '@versakit/ui'
</script>

<style scoped>
.my {
  margin: 1rem 0;
}

.vk-tag + .vk-tag {
  margin: 0px 10px;
}
</style>
