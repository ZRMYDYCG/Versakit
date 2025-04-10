<script setup lang="ts">
import { VKNoticeBar } from '@versakit/ui'
</script>

<template>
  <div class="notice-examples">
    <!-- Basic types -->
    <VKNoticeBar text="This is an info notice" type="info" />

    <VKNoticeBar
      text="Success! Your operation has been completed."
      type="success"
    />

    <VKNoticeBar
      text="Warning: Please backup your data before proceeding."
      type="warning"
    />

    <VKNoticeBar
      text="Error: Failed to save changes. Please try again."
      type="error"
    />

    <!-- Horizontal scrolling -->
    <VKNoticeBar
      text="This is a very long notice that will scroll horizontally when the content exceeds the container width. It demonstrates the horizontal scrolling feature."
      type="info"
      scrollable
      direction="horizontal"
    />

    <!-- Vertical scrolling -->
    <VKNoticeBar
      :text="[
        'First notification message',
        'Second notification message',
        'Third notification message',
      ]"
      type="info"
      scrollable
      direction="vertical"
      :speed="100"
    />

    <!-- With close button -->
    <VKNoticeBar text="This notice can be closed" type="info" closable />
  </div>
</template>

<style scoped>
.notice-examples > * {
  margin-bottom: 16px;
}
</style>
