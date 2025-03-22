<script setup lang="ts">
import { VerNoticeBar } from '@versakit/ui'
</script>

<template>
  <div class="notice-examples">
    <!-- Basic types -->
    <VerNoticeBar text="This is an info notice" type="info" />

    <VerNoticeBar
      text="Success! Your operation has been completed."
      type="success"
    />

    <VerNoticeBar
      text="Warning: Please backup your data before proceeding."
      type="warning"
    />

    <VerNoticeBar
      text="Error: Failed to save changes. Please try again."
      type="error"
    />

    <!-- Horizontal scrolling -->
    <VerNoticeBar
      text="This is a very long notice that will scroll horizontally when the content exceeds the container width. It demonstrates the horizontal scrolling feature."
      type="info"
      scrollable
      direction="horizontal"
    />

    <!-- Vertical scrolling -->
    <VerNoticeBar
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
    <VerNoticeBar text="This notice can be closed" type="info" closable />
  </div>
</template>

<style scoped>
.notice-examples > * {
  margin-bottom: 16px;
}
</style>
